from fastapi import APIRouter

from fastapi.responses import FileResponse

from app.services.report_service import (
ReportService
)

from app.services.pdf_service import (
PDFService
)

router = APIRouter(
prefix="/pdf",
tags=["PDF"]
)

@router.post("/generate")
def generate_pdf(data: dict):


    report = (
        ReportService.generate_report(data)
    )

    pdf_path = (
        PDFService.generate_pdf(report)
    )

    return FileResponse(
        path=pdf_path,
        filename="soil_report.pdf",
        media_type="application/pdf"
    )

