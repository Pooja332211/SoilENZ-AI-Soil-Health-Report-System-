def calculate_soil_health_score(soil_test):
    score = 100

    # pH penalty
    if soil_test.ph < 6.5 or soil_test.ph > 7.5:
        score -= 10

    # EC penalty
    if soil_test.ec > 1.0:
        score -= 10

    # Organic carbon penalty
    if soil_test.organic_carbon < 0.5:
        score -= 15

    # Nitrogen penalty
    if soil_test.nitrogen < 280:
        score -= 15

    # Phosphorus penalty
    if soil_test.phosphorus < 22:
        score -= 10

    # Potassium penalty
    if soil_test.potassium < 120:
        score -= 10

    # Zinc penalty
    if soil_test.zinc and soil_test.zinc < 0.6:
        score -= 5

    # Boron penalty
    if soil_test.boron and soil_test.boron < 0.5:
        score -= 5

    # Iron penalty
    if soil_test.iron and soil_test.iron < 4.5:
        score -= 5

    # Ensure non-negative
    if score < 0:
        score = 0

    # Category
    if score >= 85:
        category = "EXCELLENT"

    elif score >= 70:
        category = "GOOD"

    elif score >= 50:
        category = "MODERATE"

    else:
        category = "POOR"

    return {
        "score": score,
        "category": category
    }