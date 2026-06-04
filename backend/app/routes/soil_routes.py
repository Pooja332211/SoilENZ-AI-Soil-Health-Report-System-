from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

from app.services.ocr_service import extract_receipt_data
from app.services.crop_recommendation_service import CropRecommendationService
from app.services.action_plan_service import ActionPlanService
from app.services.carbon_credit_service import CarbonCreditService
from app.services.soil_health_score import calculate_soil_health_score

router = APIRouter()


def safe_float(value):
    try:
        return float(value)
    except:
        return 0.0


@router.post("/api/upload-receipt")
async def upload_receipt(file: UploadFile = File(...)):

    contents = await file.read()

    extracted_data = extract_receipt_data(contents)

    # =========================================
    # SOIL HEALTH SCORE
    # =========================================

    class SoilTest:
        pass

    soil_test = SoilTest()

    soil_test.ph = safe_float(
        extracted_data.get("ph")
    )

    soil_test.ec = safe_float(
        extracted_data.get("ec")
    )

    soil_test.organic_carbon = safe_float(
        extracted_data.get("organic_carbon")
    )

    soil_test.nitrogen = safe_float(
        extracted_data.get("nitrogen")
    )

    soil_test.phosphorus = safe_float(
        extracted_data.get("phosphorus")
    )

    soil_test.potassium = safe_float(
        extracted_data.get("potassium")
    )

    soil_test.zinc = safe_float(
        extracted_data.get("zinc")
    )

    soil_test.boron = safe_float(
        extracted_data.get("boron")
    )

    soil_test.iron = safe_float(
        extracted_data.get("iron")
    )

    soil_health = calculate_soil_health_score(
        soil_test
    )

    # =========================================
    # CROP RECOMMENDATION
    # =========================================

    crop_recommendations = (
        CropRecommendationService
        .recommend_crops(extracted_data)
    )

    # =========================================
    # ACTION PLAN
    # =========================================

    action_plan = (
        ActionPlanService
        .generate_plan(extracted_data)
    )

    # =========================================
    # CARBON DATA
    # =========================================

    carbon_data = (
        CarbonCreditService
        .calculate_carbon(extracted_data)
    )

    print("\n=========== EXTRACTED DATA ===========\n")
    print(extracted_data)

    print("\n=========== SOIL HEALTH ===========\n")
    print(soil_health)

    print("\n=========== CROP RECOMMENDATIONS ===========\n")
    print(crop_recommendations)

    print("\n=========== ACTION PLAN ===========\n")
    print(action_plan)

    print("\n=========== CARBON DATA ===========\n")
    print(carbon_data)

    return {
        "success": True,
        "data": extracted_data,
        "soil_health": soil_health,
        "crop_recommendations": crop_recommendations,
        "action_plan": action_plan,
        "carbon_data": carbon_data
    }