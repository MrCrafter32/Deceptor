from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class EventCreate(BaseModel):
    node_id: str
    attacker_ip: str
    service: str
    action: str
    timestamp: Optional[datetime] = None