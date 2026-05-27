from pydantic import BaseModel
from pydantic import EmailStr


class UserRegister(BaseModel):

    full_name: str

    email: EmailStr

    password: str

    role: str = "LAB_TECHNICIAN"


class UserLogin(BaseModel):

    email: EmailStr

    password: str