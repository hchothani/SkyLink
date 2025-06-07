"use client";

import React, { useEffect, useState } from 'react';
import { LiveKitRoom, ParticipantTile, RoomContext, TrackLoop } from '@livekit/components-react';
import { Participant, Room } from 'livekit-client'
import { useTracks, VideoTrack } from '@livekit/components-react'; 
import { Track } from 'livekit-client'; 

import '@livekit/components-styles';

function VideoRender(){
    const cameraTracks = useTracks([Track.Source.Camera])
    return (
     <TrackLoop tracks={cameraTracks}>
          <ParticipantTile/>
      </TrackLoop>
    )
}

export default function  MyLiveKitApp(){

  const [room] = useState(() => new Room({}));

  useEffect(() => {
     async function fetchAndConnect(){
       const params = new URLSearchParams();
       params.set('room', "test-1");
       params.set('name', "frontend");
       params.set('identity', "id-1");

       const url = `http://127.0.0.1:8000/getToken?${params}`;

       let token : any;
       try{
         const response = await fetch(url);
         if(!response.ok){
           throw new Error(`Response status: ${response.status})`);
         }
         const json = await response.json();
         console.log(json);
         token = json.token;
       } catch(error){
         console.error(error.message);
       }
      const liveKitUrl = 'wss://skylink-kjsre255.livekit.cloud';
      room.connect(liveKitUrl, token);
    } 
    fetchAndConnect();

  })


  return (
    <RoomContext.Provider value={room}>
      <VideoRender/>
    </RoomContext.Provider>
  )
}
