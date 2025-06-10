from dotenv import load_dotenv
from dataclasses import dataclass
import asyncio

from livekit.agents import (
    Agent,
    AgentSession,
    ChatContext,
    ChatMessage,
    JobContext,
    JobProcess,
    RoomInputOptions,
    RoomOutputOptions,
    RunContext,
    WorkerOptions,
    cli,
    metrics
)

from livekit.agents.job import get_job_context
from livekit.agents.llm import function_tool, ImageContent
from livekit.agents.voice import MetricsCollectedEvent
from livekit.plugins import openai

from livekit import rtc

load_dotenv()

class Assistant(Agent):
    def __init__(self) -> None:
        self._latest_frame = None
        self._video_stream : rtc.VideoStream= None
        self._tasks = []
        super().__init__(instructions="You are a helpful voice AI assistant for realtime video of Drones that is published to the room.")

    async def on_enter(self):
        room = get_job_context().room

        await asyncio.sleep(1)
        remote_participant = list(room.remote_participants.values())[0]
        video_tracks = [publication.track for publication in list(remote_participant.track_publications.values())]
        if video_tracks: 
            self._create_video_stream(video_tracks[0])

        @room.on("track_subscribed")
        def on_track_subscribed(track: rtc.Track, publication: rtc.RemoteTrackPublication, participant: rtc.RemoteParticipant):
            if track.kind == rtc.TrackKind.KIND_VIDEO:
                self._create_video_stream(track)

    async def on_user_turn_completed(self, turn_ctx: ChatContext, new_message: ChatMessage) -> None:
        if self._latest_frame:
            new_message.content.append(ImageConent(image=self._latest_frame))
            self._latest_frame = None

    def _create_video_stream(self, track: rtc.Track):
        if self._video_stream is not None:
            self._video_stream.close() 
        self._video_stream = rtc.VideoStream(track)
        async def read_stream():
            async for even in self._video_stream:
                self._latest_fram = event.frame
            

        task = asyncio.create_task(read_stream())
        task.add_done_callback(lambda t: self._tasks.remove(t))
        self._tasks.append(task)
        


async def entrypoint(ctx: JobContext):
    session = AgentSession(
        llm=openai.realtime.RealtimeModel(),
        
    )

    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_input_options=RoomInputOptions(
        ),
    )

    await ctx.connect()

    await session.generate_reply(
        instructions="Greet the user and offer your assistance."
    )


if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
