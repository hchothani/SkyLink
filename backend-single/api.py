from flask import Flask, request, jsonify
from livekit import api
from dotenv import load_dotenv
import os

load_dotenv()

LIVEKIT_URL = os.getenv("LIVEKIT_URL")
LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")

app = Flask(__name__)

# Testing Routes
@app.route("/")
def root_test():
    return "ROOT WORKS"

@app.route("/getToken", methods=["POST"])
def generate_token():
    """Generates JWT for clients/drones to join room"""
    data = request.json
    identity = data["identity"]
    room_name = data["room"]
    name = data.get["name", "anonymous"]
    publish = data.get["publish", False]

    # Gen Token
    token = api.AccessToken() \
        .with_identity(identity) \
        .with_name(name) \
        .with_grants(api.VideoGrants(
                         room_join=True,
                         room=room_name
                     )
        )


    # Return token
    return jsonify({"token": token.to_jwt()})

@app.route("/createRoom", methods=['POST'])
def handle_create_room():
    """Room Management Endpoint"""
    room_data = request.json
    room_name = room_data["name"]

    # Creating LiveKit Room

    create_room(
        room_name,
        empty_timeout=86400, # Taking 24h for now
        max_participants=100, # Change Later if needed
        metadata=room_data.get("metadata", NULL),
    )

    # Dispatch AI Agent on room creation
     
    start_ai_agent(room_name)

    return jsonify({
                       'status': 'success',
                       'room': room_name,
                   })

if __name__ == '__main__':
    app.run(threaded=True,debug=True)

    
