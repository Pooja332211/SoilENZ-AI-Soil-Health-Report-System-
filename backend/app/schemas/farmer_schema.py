from uuid import UUID
from datetime import datetime

from pydantic import BaseModel
from pydantic import BaseModel


class FarmerCreate(BaseModel):
    name: str
    mobile: str
    village: str
    district: str
    state: str
    farm_size: float
    crop_type: str



class FarmerCreate(FarmerBase):
    pass


class FarmerResponse(FarmerBase):
    id: UUID

    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True