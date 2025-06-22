# routes/events.py
from fastapi import APIRouter, Depends, Request
from models import EventCreate
from auth import get_api_key
from database import db
from datetime import datetime
from utils.mitre import map_to_mitre

router = APIRouter()

@router.post("/events")
async def receive_event(event: EventCreate, api_key: str = Depends(get_api_key)):
    data = event.dict()
    data["timestamp"] = data.get("timestamp") or datetime.utcnow()
    data["api_key"] = api_key  
    data["mitre_tag"] = map_to_mitre(data["action"])

    await db.nodes.update_one(
    {"node_id": data["node_id"], "api_key": api_key},
    {"$set": {"last_seen": data["timestamp"]}},
    upsert=True
)
    return {"message": "Event received", "mitre_tag": data["mitre_tag"]}


@router.get("/events")
async def get_events(request: Request, api_key: str = Depends(get_api_key)):
    query_params = dict(request.query_params)
    query = {"api_key": api_key}

    for key in ["node_id", "service", "mitre_tag"]:
        if key in query_params:
            query[key] = query_params[key]

    cursor = db.events.find(query).sort("timestamp", -1)
    events = []
    async for doc in cursor:
        doc["_id"] = str(doc["_id"])
        events.append(doc)
    return events
