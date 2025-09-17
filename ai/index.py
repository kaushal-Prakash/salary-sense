from fastapi import FastAPI
from routes.ai_route import ai_router

app = FastAPI()

#routes
app.include_router(ai_router, prefix="/ai")

@app.get("/")
def read_root():
    return {"message": "AI Backend is running!"}

