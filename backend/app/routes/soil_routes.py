from typing import List
from uuid import UUID

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.soil_test import SoilTest
from app.models.farmer import Farmer

from app.schemas.soil_schema import (
    SoilTestCreate,
    SoilTestResponse
)


router = APIRouter(
    prefix="/soil-tests",
    tags=["Soil Tests"]
)


@router.post(
    "/",
    response_model=SoilTestResponse
)
def create_soil_test(
    soil_test: SoilTestCreate,
    db: Session = Depends(get_db)
):
    farmer = db.query(Farmer).filter(
        Farmer.id == soil_test.farmer_id
    ).first()

    if not farmer:
        raise HTTPException(
            status_code=404,
            detail="Farmer not found"
        )

    db_soil_test = SoilTest(
        **soil_test.model_dump()
    )

    db.add(db_soil_test)

    db.commit()

    db.refresh(db_soil_test)

    return db_soil_test


@router.get(
    "/",
    response_model=List[SoilTestResponse]
)
def get_soil_tests(
    db: Session = Depends(get_db)
):
    return db.query(SoilTest).all()


@router.get(
    "/{soil_test_id}",
    response_model=SoilTestResponse
)
def get_soil_test(
    soil_test_id: UUID,
    db: Session = Depends(get_db)
):
    soil_test = db.query(SoilTest).filter(
        SoilTest.id == soil_test_id
    ).first()

    if not soil_test:
        raise HTTPException(
            status_code=404,
            detail="Soil test not found"
        )

    return soil_test