from pydantic import BaseModel, EmailStr, constr

class UserRegistrationSchema(BaseModel):
    username: constr(min_length=3, max_length=30)
    email: EmailStr
    password: constr(min_length=8)

class UserLoginSchema(BaseModel):
    username: str
    password: str

class UserProfileSchema(BaseModel):
    username: str
    email: EmailStr
    full_name: str = None
    bio: str = None