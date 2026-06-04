class ActionPlanService:

    @staticmethod
    def generate_plan(data):

        def safe_float(value):
            try:
                return float(value)
            except (TypeError, ValueError):
                return 0.0

        plan = []

        n = safe_float(data.get("nitrogen"))
        p = safe_float(data.get("phosphorus"))
        k = safe_float(data.get("potassium"))
        oc = safe_float(data.get("organic_carbon"))
        s = safe_float(data.get("sulfur"))
        zn = safe_float(data.get("zinc"))
        b = safe_float(data.get("boron"))
        mg = safe_float(data.get("magnesium"))

        if oc < 0.75:
            plan.append({
                "name": "FYM / Compost",
                "dose": "1500 - 2000 kg",
                "priority": "HIGH",
                "purpose": "Improve organic matter"
            })

        if n < 280:
            plan.append({
                "name": "Urea (46% N)",
                "dose": "55 kg",
                "priority": "HIGH",
                "purpose": "Nitrogen supply"
            })

        if p < 22:
            plan.append({
                "name": "DAP (18-46-0)",
                "dose": "40 kg",
                "priority": "MEDIUM",
                "purpose": "Phosphorus supply"
            })

        if s < 10:
            plan.append({
                "name": "Gypsum",
                "dose": "100 kg",
                "priority": "HIGH",
                "purpose": "Sulfur correction"
            })

        if zn < 1:
            plan.append({
                "name": "Zinc Sulphate",
                "dose": "10 kg",
                "priority": "HIGH",
                "purpose": "Zinc correction"
            })

        if b < 0.5:
            plan.append({
                "name": "Boron",
                "dose": "1 kg",
                "priority": "HIGH",
                "purpose": "Boron correction"
            })

        if mg < 1:
            plan.append({
                "name": "Magnesium Sulphate",
                "dose": "25 kg",
                "priority": "HIGH",
                "purpose": "Magnesium correction"
            })

        return plan