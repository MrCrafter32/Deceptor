from fastapi import APIRouter, Depends
from database import db
from auth import get_api_key
from models import NodeCreate
from datetime import datetime

router = APIRouter()

@router.post("/nodes")
async def register_node(node: NodeCreate, api_key: str = Depends(get_api_key)):
    existing = await db.nodes.find_one({"node_id": node.node_id, "api_key": api_key})
    if existing:
        return {"message": "Node already exists"}
    
    node_data = node.dict()
    node_data["api_key"] = api_key
    node_data["registered_at"] = datetime.utcnow()
    await db.nodes.insert_one(node_data)
    return {"message": "Node registered"}

@router.get("/nodes")
async def get_nodes(api_key: str = Depends(get_api_key)):
    nodes_cursor = db.nodes.find({"api_key": api_key})
    nodes = []
    async for node in nodes_cursor:
        node["_id"] = str(node["_id"])
        nodes.append(node)
    return nodes