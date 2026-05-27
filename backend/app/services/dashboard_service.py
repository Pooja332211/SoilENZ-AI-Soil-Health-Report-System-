from app.services.soil_analysis_service import (
SoilAnalysisService
)

from app.services.crop_recommendation_service import (
CropRecommendationService
)

from app.services.carbon_credit_service import (
CarbonCreditService
)

class DashboardService:


    @staticmethod
    def generate_dashboard(data):

        soil_analysis = (
            SoilAnalysisService.analyze_soil(data)
        )

        crops = (
            CropRecommendationService
            .recommend_crops(data)
        )

        carbon = (
            CarbonCreditService
            .calculate_carbon(data)
        )

        dashboard = {

            "soil_health_score":
                soil_analysis["overall_score"],

            "health_status":
                soil_analysis["health_status"],

            "parameters":
                soil_analysis["parameters"],

            "recommended_crops":
                crops,

            "carbon_metrics":
                carbon
        }

        return dashboard
