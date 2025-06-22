# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Deceptor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

# Then include your routers
from routes import events, nodes

app.include_router(events.router, prefix="/api/v1")
app.include_router(nodes.router, prefix="/api/v1")
