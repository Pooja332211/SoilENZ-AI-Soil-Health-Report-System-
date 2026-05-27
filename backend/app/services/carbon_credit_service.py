class CarbonCreditService:


    @staticmethod
    def calculate_carbon(data):

        organic_carbon = data["organic_carbon"]

        farm_size = data.get(
            "farm_size",
            1
        )

        carbon_sequestration = round(
            organic_carbon * 1000 * farm_size,
            2
        )

        carbon_score = round(
            organic_carbon * 100,
            2
        )

        estimated_credits = round(
            carbon_sequestration / 1000,
            2
        )

        estimated_income = round(
            estimated_credits * 2500,
            2
        )

        if carbon_score < 40:

            status = "Low"

        elif carbon_score < 70:

            status = "Moderate"

        else:

            status = "Excellent"

        return {

            "carbon_score": carbon_score,

            "carbon_status": status,

            "co2_sequestered_kg":
                carbon_sequestration,

            "estimated_carbon_credits":
                estimated_credits,

            "estimated_income_inr":
                estimated_income
        }

