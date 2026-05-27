from typing import List
from uuid import UUID

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.farmer import Farmer

from app.schemas.farmer_schema import (
    FarmerCreate,
    FarmerResponse
)


router = APIRouter(
    prefix="/farmers",
    tags=["Farmers"]
)


@router.post(
    "/",
    response_model=FarmerResponse
)
def create_farmer(
    farmer: FarmerCreate,
    db: Session = Depends(get_db)
):
    db_farmer = Farmer(**farmer.model_dump())

    db.add(db_farmer)

    db.commit()

    db.refresh(db_farmer)

    return db_farmer


@router.get(
    "/",
    response_model=List[FarmerResponse]
)
def get_farmers(
    db: Session = Depends(get_db)
):
    return db.query(Farmer).all()


@router.get(
    "/{farmer_id}",
    response_model=FarmerResponse
)
def get_farmer(
    farmer_id: UUID,
    db: Session = Depends(get_db)
):
    farmer = db.query(Farmer).filter(
        Farmer.id == farmer_id
    ).first()

    if not farmer:
        raise HTTPException(
            status_code=404,
            detail="Farmer not found"
        )

    return farmer