from flask import Flask, request, jsonify
from livekit import api
from dotenv import load_dotenv
import os

load_dotenv()

LIVEKIT_URL = os.getenv("LIVEKIT_URL")
LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")

app = Flask(__name__)

@app.route("/getToken", methods=["POST"])
def generate_token():
    """Generates JWT for clients/drones to join room"""
    data = request.json
    identity = data["identity"]
    room_name = data["room"]
    name = data["name"]

    # Gen Token
    token = api.AccessToken() \
        .with_identity(identity) \
        .with_name(name) \
        .with_grants(api.VideoGrants(
                         room_join=True,
                         room=room_name
                     ))

    # Return token
    return jsonify({"token": token.to_jwt()})


