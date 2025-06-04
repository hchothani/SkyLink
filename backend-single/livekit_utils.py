import os
import subprocess
from livekit import api
from dotenv import load_dotenv

load_dotenv()

async def create_room(name:str, **kwargs):
    """Create a LiveKit room"""
    lkapi = api.LiveKitAPI()
    room_info =  await lkapi.room.create_room(api.CreateRoomRequest(
            name = name,
            empty_timeout = kwargs.get("empty_timeout", 60*60*24),
            metadata = kwargs.get("metadata", ""),
            max_participants = kwargs.get("max_participants", 10) 
        ))
    await lkapi.aclose()
    return room_info
        

async def delete_room(name: str):
    """Delete a LiveKit Room"""
    lkapi = api.LiveKitAPI()
    room_info = await lkapi.room.delete_room(
        api.DeleteRoomRequest(room=name)
    )
    await lkapi.aclose()
    return room_info

async def list_rooms():
    """List Active Rooms"""
    lkapi = api.LiveKitAPI()
    response = await self.lkapi.room.list_rooms(api.room.ListRoomRequest())
    await lkapi.aclose()
    return response.rooms
