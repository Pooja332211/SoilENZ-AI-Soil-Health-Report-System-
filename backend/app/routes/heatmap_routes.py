from fastapi import APIRouter

from app.services.heatmap_service import (
HeatmapService
)

router = APIRouter(
prefix="/heatmaps",
tags=["Heatmaps"]
)

@router.post("/generate")
def generate_heatmap(data: dict):

    heatmaps = (
        HeatmapService
        .generate_heatmap(data)
    )

    return {
        "success": True,
        "heatmaps": heatmaps
    }

