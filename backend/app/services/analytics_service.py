import math


# =========================================
# SOIL HEALTH SCORE
# =========================================

def calculate_soil_health_score(data):

    score = 100

    ph = float(data.get("pH", 7))
    oc = float(data.get("OC", 0))
    n = float(data.get("N", 0))
    p = float(data.get("P", 0))
    k = float(data.get("K", 0))

    # pH

    if ph > 8.2 or ph < 5.5:
        score -= 20

    elif ph > 7.8:
        score -= 10

    # Organic Carbon

    if oc < 0.4:
        score -= 25

    elif oc < 0.75:
        score -= 12

    # Nitrogen

    if n < 140:
        score -= 20

    elif n < 250:
        score -= 10

    # Phosphorus

    if p < 22:
        score -= 10

    # Potassium

    if k < 120:
        score -= 15

    elif k < 280:
        score -= 8

    final_score = max(20, round(score, 1))

    if final_score >= 80:
        grade = "Excellent"

    elif final_score >= 65:
        grade = "Good"

    elif final_score >= 45:
        grade = "Moderate"

    else:
        grade = "Poor"

    return {

        "score": final_score,

        "grade": grade
    }


# =========================================
# GRID GENERATOR
# =========================================

def generate_grid(base_value):

    grid = []

    for i in range(5):

        row = []

        for j in range(5):

            variance = (
                math.sin(base_value + i + j)
                * 0.08
            )

            value = round(
                base_value * (1 + variance),
                2
            )

            row.append(value)

        grid.append(row)

    return grid