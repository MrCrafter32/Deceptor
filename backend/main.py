from fastapi import FastAPI
from routes import events

app = FastAPI(title="Deceptor API")

app.include_router(events.router, prefix="/api/v1")
