import pandas as pd
import joblib

model = joblib.load("salary_prediction_model.pkl")
model_columns = joblib.load("model_columns.pkl")

def predict(data: dict):
    df = pd.DataFrame([data])
    
    # Apply One-Hot Encoding
    df = pd.get_dummies(df, columns=['Education', 'Location', 'Job_Title', 'Gender'], drop_first=True)

    # Reindex to match training columns
    df = df.reindex(columns=model_columns, fill_value=0)

    prediction = model.predict(df)
    return {"prediction": float(prediction[0])}
