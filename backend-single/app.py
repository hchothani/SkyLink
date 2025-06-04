from livekit import api

from fastapi import FastAPI, HTTPException, Body, Query
from fastapi.middleware.cors import CORSMiddleware

import os
from dotenv import load_dotenv
from typing import Optional, Union

from livekit_utils import create_room, delete_room

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def root_test():
    return {"Hello": "World"}

@app.post("/getToken")
def generate_token(room: str, identity: str, name: str = Body("anonymous"), publish: bool = Body(False)):
    """LiveKit Token Generation"""
    try:
        token = api.AccessToken() \
            .with_identity(identity) \
            .with_name(name) \
            .with_grants(api.VideoGrants(
                             room = room,
                             room_join = True,
                             can_publish = publish,
                             can_subscribe = True,
                         )).to_jwt()
        return {"token": token}

    except Exception as e:
        raise HTTPException(500, str(e))

        
@app.post("/createRoom")
async def create_lk_room(room_name: str):
    try:
        room = await create_room(
            name=room_name, 
            empty_timeout=86400,
            max_participants = 100,
        )

        # Should start AI Agent here later

        return{
            "status": "success",
            "room": room.name
        }
    except Exception as e:
        raise HTTPException(500, str(e))

@app.post("/deleteRoom")
async def delete_lk_room(room_name: str):
    try:
        room =await delete_room(name=room_name)

        return{
            "status": "success",
            "room": room.name
        } 
    except Exception as e:
        raise HTTPException(500, str(e))
