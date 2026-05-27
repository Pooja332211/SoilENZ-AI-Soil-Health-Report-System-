from app.utils.soil_thresholds import (
    SOIL_THRESHOLDS
)


class SoilAnalysisService:


    @staticmethod
    def analyze_parameter(name, value):

        config = SOIL_THRESHOLDS[name]

        low = config["low"]

        high = config["high"]

        if value < low:

            category = "low"

        elif value <= high:

            category = "medium"

        else:

            category = "high"

        return {

            "parameter": name,

            "value": value,

            "status":
                config["labels"][category],

            "score":
                config["scores"][category],

            "color":
                config["colors"][category],

            "recommendation":
                config["recommendations"][category]
        }


    @staticmethod
    def analyze_soil(data):

        parameters = {}

        nutrient_keys = [

            "ph",

            "ec",

            "organic_carbon",

            "nitrogen",

            "phosphorus",

            "potassium"
        ]


        for key in nutrient_keys:

            parameters[key] = (

                SoilAnalysisService
                .analyze_parameter(

                    key,

                    data[key]
                )
            )


        scores = [

            item["score"]

            for item in parameters.values()
        ]


        overall_score = round(
            sum(scores) / len(scores),
            2
        )


        if overall_score < 50:

            health_status = "Poor"

        elif overall_score < 70:

            health_status = "Medium"

        elif overall_score < 85:

            health_status = "Good"

        else:

            health_status = "Excellent"


        return {

            "overall_score":
                overall_score,

            "health_status":
                health_status,

            "parameters":
                parameters
        }