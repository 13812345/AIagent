from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class User(BaseModel):
    username: str
    email: str
    password: str

@app.post("/register", response_model=User)
async def register_user(user: User):
    # Here you would typically hash the password and save the user to the database
    return user

@app.get("/")
async def read_root():
    return {"message": "Welcome to the registration API!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)