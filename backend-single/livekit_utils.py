import os
import subprocess
from livekit import api
from dotenv import load_dotenv

load_dotenv()

class LiveKitManager():
    def __init__(self):
        self.lkapi = api.LiveKitAPI()

    async def create_room(self, name:str, **kwargs) -> api.room.Room:
        """Create a LiveKit room"""
        room_config = api.room.CreateRoomRequest(
            name = name,
            empty_timeout = kwargs.get("empty_timeout", 60*60*24),
            metadata = kwargs.get("metadata", ""),
            max_participants = kwargs.get("max_participants", 10),
        )

        return await self.lkapi.room.create_room(room_config)

    async def delete_room(self, name: str) -> None
        """Delete a LiveKit Room"""
        await self.lkapi.room.delete_room(
            api.room.DeleteRoomRequest(room=name)
        )

    async def list_rooms(self) -> list[api.room.Room]
        """List Active Rooms"""
        response = await self.lkapi.room.list_rooms(api.room.ListRoomRequest())
        return response.rooms

    async def close(self):
        """Close and Cleanup"""
        await self.lkapi.aclose()
    
