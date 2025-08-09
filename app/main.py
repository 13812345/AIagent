from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/register")
def register_user(user: dict):
    # Here you would typically handle user registration logic
    return {"message": "User registered successfully", "user": user}