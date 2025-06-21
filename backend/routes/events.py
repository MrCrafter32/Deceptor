from fastapi import APIRouter, Depends
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

    await db.events.insert_one(data)
    return {"message": "Event received", "mitre_tag": data["mitre_tag"]}