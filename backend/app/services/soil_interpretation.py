from app.constants.soil_thresholds import SOIL_THRESHOLDS

from app.services.soil_health_score import (
    calculate_soil_health_score
)


def classify_value(value, low, medium=None):
    if medium is None:
        return "LOW" if value < low else "SUFFICIENT"

    if value < low:
        return "LOW"

    elif value < medium:
        return "MEDIUM"

    return "HIGH"


def interpret_soil_test(soil_test):
    results = {}

    # =========================================
    # pH Interpretation
    # =========================================

    ph = soil_test.ph

    if ph < 6.5:
        ph_status = "ACIDIC"

    elif ph > 7.5:
        ph_status = "ALKALINE"

    else:
        ph_status = "NORMAL"

    results["ph"] = {
        "value": ph,
        "status": ph_status
    }

    # =========================================
    # EC Interpretation
    # =========================================

    ec = soil_test.ec

    if ec > 1.0:
        ec_status = "SALINE"

    else:
        ec_status = "NORMAL"

    results["ec"] = {
        "value": ec,
        "status": ec_status
    }

    # =========================================
    # Organic Carbon
    # =========================================

    oc = soil_test.organic_carbon

    results["organic_carbon"] = {
        "value": oc,
        "status": classify_value(
            oc,
            0.5,
            0.75
        )
    }

    # =========================================
    # Nitrogen
    # =========================================

    n = soil_test.nitrogen

    results["nitrogen"] = {
        "value": n,
        "status": classify_value(
            n,
            280,
            450
        ),
        "recommendation": (
            "Apply Urea + Compost"
            if n < 280
            else "Nitrogen sufficient"
        )
    }

    # =========================================
    # Phosphorus
    # =========================================

    p = soil_test.phosphorus

    results["phosphorus"] = {
        "value": p,
        "status": classify_value(
            p,
            22,
            56
        ),
        "recommendation": (
            "Apply SSP or DAP"
            if p < 22
            else "Phosphorus sufficient"
        )
    }

    # =========================================
    # Potassium
    # =========================================

    k = soil_test.potassium

    results["potassium"] = {
        "value": k,
        "status": classify_value(
            k,
            120,
            280
        ),
        "recommendation": (
            "Apply MOP"
            if k < 120
            else "Potassium sufficient"
        )
    }

    # =========================================
    # Zinc
    # =========================================

    zinc = soil_test.zinc

    if zinc is not None:
        results["zinc"] = {
            "value": zinc,
            "status": (
                "DEFICIENT"
                if zinc < 0.6
                else "SUFFICIENT"
            ),
            "recommendation": (
                "Apply Zinc Sulphate"
                if zinc < 0.6
                else "Zinc sufficient"
            )
        }

    # =========================================
    # Boron
    # =========================================

    boron = soil_test.boron

    if boron is not None:
        results["boron"] = {
            "value": boron,
            "status": (
                "DEFICIENT"
                if boron < 0.5
                else "SUFFICIENT"
            ),
            "recommendation": (
                "Apply Borax"
                if boron < 0.5
                else "Boron sufficient"
            )
        }

    # =========================================
    # Iron
    # =========================================

    iron = soil_test.iron

    if iron is not None:
        results["iron"] = {
            "value": iron,
            "status": (
                "DEFICIENT"
                if iron < 4.5
                else "SUFFICIENT"
            ),
            "recommendation": (
                "Apply Ferrous Sulphate"
                if iron < 4.5
                else "Iron sufficient"
            )
        }

    # =========================================
    # Soil Health Score
    # =========================================

    health_score = calculate_soil_health_score(
        soil_test
    )

    results["soil_health"] = health_score

    return results