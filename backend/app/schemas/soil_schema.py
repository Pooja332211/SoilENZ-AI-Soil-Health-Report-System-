from uuid import UUID
from datetime import datetime

from pydantic import BaseModel


class SoilTestBase(BaseModel):
    farmer_id: UUID

    sample_code: str
    test_type: str

    soil_texture: str

    ph: float
    ec: float
    organic_carbon: float

    nitrogen: float
    phosphorus: float
    potassium: float

    sulfur: float | None = None
    zinc: float | None = None
    boron: float | None = None
    iron: float | None = None
    copper: float | None = None
    manganese: float | None = None
    calcium: float | None = None
    magnesium: float | None = None

    salinity_risk: str
    soil_health_score: float

    gps_latitude: float
    gps_longitude: float


class SoilTestCreate(SoilTestBase):
    pass


class SoilTestResponse(SoilTestBase):
    id: UUID

    tested_at: datetime
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True