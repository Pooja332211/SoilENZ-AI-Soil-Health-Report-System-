from fastapi import APIRouter

from app.services.dashboard_service import (
DashboardService
)

router = APIRouter(
prefix="/dashboard",
tags=["Dashboard"]
)

@router.post("/generate")
def generate_dashboard(data: dict):


    dashboard = (
        DashboardService
        .generate_dashboard(data)
    )

    return {
        "success": True,
        "dashboard": dashboard
    }

