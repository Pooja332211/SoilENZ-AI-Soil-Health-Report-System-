from app.services.soil_analysis_service import (
    SoilAnalysisService
)


class ReportService:

    @staticmethod
    def generate_report(data):

        analysis = (
            SoilAnalysisService
            .analyze_soil(data)
        )

        report = {

            "farmer": {

                "name":
                    data["farmer_name"],

                "village":
                    data["village"],

                "crop":
                    data["crop"],

                "farm_size":
                    data["farm_size"]
            },

            "soil_health_score":
                analysis["overall_score"],

            "health_status":
                analysis["health_status"],

            "parameters":
                analysis["parameters"]
        }

        return report