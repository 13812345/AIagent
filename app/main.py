from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# User model
class User(BaseModel):
    username: str
    email: str
    password: str

# In-memory user storage (for demonstration purposes)
users_db = []

@app.post("/register", response_model=User)
async def register_user(user: User):
    users_db.append(user)
    return user

@app.get("/users", response_model=List[User])
async def get_users():
    return users_db

@app.get("/")
async def root():
    return {"message": "Welcome to the membership page!"}