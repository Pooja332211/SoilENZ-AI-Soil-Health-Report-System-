from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import relationship

from datetime import datetime

from app.models.base import Base


class SoilTest(Base):
    __tablename__ = "soil_tests"

    id = Column(Integer, primary_key=True, index=True)

    farmer_id = Column(
        Integer,
        ForeignKey("farmers.id")
    )

    ph = Column(Float)
    ec = Column(Float)
    organic_carbon = Column(Float)

    nitrogen = Column(Float)
    phosphorus = Column(Float)
    potassium = Column(Float)

    calcium = Column(Float)
    magnesium = Column(Float)
    sulfur = Column(Float)

    zinc = Column(Float)
    iron = Column(Float)
    manganese = Column(Float)
    boron = Column(Float)

    soil_health_score = Column(Float)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    farmer = relationship(
        "Farmer",
        back_populates="soil_tests"
    )
