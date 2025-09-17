from fastapi import FastAPI
from routes.ai_route import ai_router
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # allowed origins
    allow_credentials=True,
    allow_methods=["*"],            # allow all HTTP methods
    allow_headers=["*"],            # allow all headers
)

#routes
app.include_router(ai_router, prefix="/ai")

@app.get("/")
def read_root():
    return {"message": "AI Backend is running!"}

