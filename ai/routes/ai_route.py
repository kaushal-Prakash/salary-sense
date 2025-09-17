from fastapi import APIRouter
from controllers.ai_controller import predict

ai_router = APIRouter()

@ai_router.post("/predict")
def predict_route(input_data: dict):
    return predict(input_data)
