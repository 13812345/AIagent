from pydantic import BaseModel, EmailStr, constr

class UserCreate(BaseModel):
    username: constr(min_length=3, max_length=50)
    email: EmailStr
    password: constr(min_length=8)

class UserUpdate(BaseModel):
    username: constr(min_length=3, max_length=50) = None
    email: EmailStr = None
    password: constr(min_length=8) = None

class UserInDB(UserCreate):
    id: int

class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        orm_mode = True