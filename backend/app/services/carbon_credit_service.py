class CarbonCreditService:

    @staticmethod
    def calculate_carbon(data):

        organic_carbon = float(
            data.get("organic_carbon", 0)
        )

        nitrogen = float(
            data.get("nitrogen", 0)
        )

        phosphorus = float(
            data.get("phosphorus", 0)
        )

        potassium = float(
            data.get("potassium", 0)
        )

        ph = float(
            data.get("ph", 7)
        )

        ec = float(
            data.get("ec", 0)
        )

        farm_size = float(
            data.get("farm_size", 1)
        )

        # ==================================
        # CARBON SEQUESTRATION
        # ==================================

        current_oc = round(
            organic_carbon * 2047,
            2
        )

        improved_oc = round(
            current_oc * 1.46,
            2
        )

        annual_oc_gain = round(
            improved_oc - current_oc,
            2
        )

        biomass_current = round(
            current_oc * 0.62,
            2
        )

        biomass_improved = round(
            biomass_current * 1.69,
            2
        )

        biomass_gain = round(
            biomass_improved - biomass_current,
            2
        )

        cover_crop_gain = round(
            annual_oc_gain * 0.82,
            2
        )

        total_saved = round(
            annual_oc_gain +
            biomass_gain +
            cover_crop_gain,
            2
        )

        # ==================================
        # CARBON HEALTH SCORE
        # ==================================

        carbon_score = 0

        if organic_carbon >= 0.75:
            carbon_score += 30
        elif organic_carbon >= 0.50:
            carbon_score += 20
        else:
            carbon_score += 10

        if nitrogen >= 280:
            carbon_score += 20
        elif nitrogen >= 200:
            carbon_score += 15
        else:
            carbon_score += 8

        if phosphorus >= 22:
            carbon_score += 15
        else:
            carbon_score += 8

        if potassium >= 280:
            carbon_score += 15
        else:
            carbon_score += 8

        if 6.5 <= ph <= 7.5:
            carbon_score += 10
        else:
            carbon_score += 5

        if ec < 1:
            carbon_score += 10
        else:
            carbon_score += 5

        carbon_score = min(
            100,
            round(carbon_score)
        )

        # ==================================
        # STATUS
        # ==================================

        if carbon_score >= 70:
            status = "High"

        elif carbon_score >= 50:
            status = "Medium"

        else:
            status = "Low"

        # ==================================
        # CARBON CREDITS
        # ==================================

        credit_low = round(
            total_saved / 4000,
            2
        )

        credit_high = round(
            total_saved / 2500,
            2
        )

        income_low = round(
            credit_low * 4000,
            2
        )

        income_high = round(
            credit_high * 4000,
            2
        )

        return {

            "carbon_score": carbon_score,

            "carbon_status": status,

            "current_oc": current_oc,

            "improved_oc": improved_oc,

            "annual_oc_gain": annual_oc_gain,

            "biomass_current": biomass_current,

            "biomass_improved": biomass_improved,

            "biomass_gain": biomass_gain,

            "cover_crop_gain": cover_crop_gain,

            "co2_sequestered_kg": total_saved,

            "estimated_carbon_credits_low": credit_low,

            "estimated_carbon_credits_high": credit_high,

            "estimated_income_low": income_low,

            "estimated_income_high": income_high
        }