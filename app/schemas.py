from pydantic import BaseModel, EmailStr, constr

class UserRegistrationSchema(BaseModel):
    username: constr(min_length=3, max_length=30)
    email: EmailStr
    password: constr(min_length=8)
    confirm_password: constr(min_length=8)

    class Config:
        orm_mode = True

    @classmethod
    def validate_passwords(cls, password: str, confirm_password: str):
        if password != confirm_password:
            raise ValueError("Passwords do not match")
        return password