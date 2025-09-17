from fastapi import FastAPI

# Create FastAPI instance
app = FastAPI()

# Root route
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

