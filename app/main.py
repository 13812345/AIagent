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

@app.get("/users", response_model=List[User])
async def get_users():
    # This is a placeholder for getting users from the database
    return []  # Return an empty list for now

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)