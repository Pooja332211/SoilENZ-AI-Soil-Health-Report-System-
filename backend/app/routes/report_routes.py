from fastapi import APIRouter

from app.services.report_service import (
ReportService
)

router = APIRouter(
prefix="/reports",
tags=["Reports"]
)

@router.post("/generate")
def generate_report(data: dict):

    report = (
        ReportService.generate_report(data)
    )

    return {
        "success": True,
        "report": report
    }
