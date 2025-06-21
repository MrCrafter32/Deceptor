from fastapi import HTTPException, Depends, Header
import os
from dotenv import load_dotenv

load_dotenv()
VALID_KEYS = os.getenv("API_KEYS", "").split(",")

def get_api_key(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid Authorization header")
    token = authorization.replace("Bearer ", "").strip()
    if token not in VALID_KEYS:
        raise HTTPException(status_code=403, detail="Invalid API key")
    return token