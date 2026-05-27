from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.models.base import Base


class Farmer(Base):
    __tablename__ = "farmers"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    mobile = Column(String)

    village = Column(String)

    district = Column(String)

    state = Column(String)

    farm_size = Column(Float)

    crop_type = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    soil_tests = relationship(
        "SoilTest",
        back_populates="farmer"
    )
