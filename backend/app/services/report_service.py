from datetime import datetime


def generate_dynamic_report(data):

    nitrogen = float(data.get("nitrogen", 0))
    phosphorus = float(data.get("phosphorus", 0))
    potassium = float(data.get("potassium", 0))
    ph = float(data.get("ph", 0))
    organic_carbon = float(data.get("organic_carbon", 0))

    # =========================================
    # SOIL HEALTH SCORE
    # =========================================

    score = 0

    if nitrogen > 200:
        score += 20

    if phosphorus > 35:
        score += 20

    if potassium > 300:
        score += 20

    if 6.5 <= ph <= 7.8:
        score += 20

    if organic_carbon > 0.5:
        score += 20

    # =========================================
    # STATUS
    # =========================================

    if score >= 80:
        fertility = "Excellent"

    elif score >= 60:
        fertility = "Good"

    elif score >= 40:
        fertility = "Moderate"

    else:
        fertility = "Poor"

    # =========================================
    # FINAL REPORT
    # =========================================

    return {

        "farmer": {

            "name": data.get("farmer_name", "N/A"),

            "mobile": data.get("phone_number", "N/A"),

            "location": data.get("location", "N/A"),

            "crop": data.get("crop", "Paddy")
        },

        "soil": {

            "nitrogen": nitrogen,

            "phosphorus": phosphorus,

            "potassium": potassium,

            "ph": ph,

            "organic_carbon": organic_carbon
        },

        "analysis": {

            "soil_health_score": score,

            "fertility": fertility,

            "soil_type": "Black Soil",

            "rainfall": "Moderate"
        },

        "report_meta": {

            "lab_name": "Arkashine Labs",

            "generated_at": str(datetime.now())
        }
    }