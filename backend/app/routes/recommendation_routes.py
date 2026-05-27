from app.services.crop_calendar import generate_crop_calendar

def generate_fertilizer_plan(soil_test):

    recommendations = []


    # NITROGEN

    if soil_test.nitrogen < 280:

        recommendations.append({

            "nutrient": "Nitrogen",

            "status": "LOW",

            "fertilizer": "Urea",

            "dosage":
                "50 kg per acre",

            "timing":
                "Apply in 2 split doses",

            "method":
                "Broadcast near root zone",

            "organic_option":
                "Apply compost + vermicompost"

        })


    # PHOSPHORUS

    if soil_test.phosphorus < 22:

        recommendations.append({

            "nutrient": "Phosphorus",

            "status": "LOW",

            "fertilizer": "DAP / SSP",

            "dosage":
                "40 kg per acre",

            "timing":
                "Basal application before sowing",

            "method":
                "Mix into soil",

            "organic_option":
                "Bone meal or rock phosphate"

        })


    # POTASSIUM

    if soil_test.potassium < 250:

        recommendations.append({

            "nutrient": "Potassium",

            "status": "LOW",

            "fertilizer": "MOP",

            "dosage":
                "25 kg per acre",

            "timing":
                "Apply during vegetative stage",

            "method":
                "Soil application",

            "organic_option":
                "Wood ash application"

        })


    # ZINC

    if soil_test.zinc < 0.6:

        recommendations.append({

            "nutrient": "Zinc",

            "status": "DEFICIENT",

            "fertilizer":
                "Zinc Sulphate",

            "dosage":
                "10 kg per acre",

            "timing":
                "Before sowing",

            "method":
                "Soil incorporation",

            "organic_option":
                "Organic micronutrient mixture"

        })


    # BORON

    if soil_test.boron < 0.5:

        recommendations.append({

            "nutrient": "Boron",

            "status": "DEFICIENT",

            "fertilizer":
                "Borax",

            "dosage":
                "1-2 kg per acre",

            "timing":
                "Apply during land preparation",

            "method":
                "Uniform broadcasting",

            "organic_option":
                "Organic boron formulations"

        })


    return recommendations
crop_calendars = []

for crop in crop_recommendations:

    calendar = generate_crop_calendar(
        crop["crop"]
    )

    crop_calendars.append({

        "crop": crop["crop"],

        "calendar": calendar
    })