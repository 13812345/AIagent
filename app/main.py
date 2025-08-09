from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class User(BaseModel):
    username: str
    email: str
    password: str

@app.post("/register/")
async def register_user(user: User):
    return {"message": "User registered successfully", "user": user}

@app.get("/users/", response_model=List[User])
async def get_users():
    return []  # Placeholder for user list, implement actual logic as needed

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)