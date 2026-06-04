class CropRecommendationService:

    @staticmethod
    def safe_float(value):
        try:
            return float(value)
        except:
            return 0.0

    @staticmethod
    def recommend_crops(data):

        ph = CropRecommendationService.safe_float(
            data.get("ph")
        )

        ec = CropRecommendationService.safe_float(
            data.get("ec")
        )

        nitrogen = CropRecommendationService.safe_float(
            data.get("nitrogen")
        )

        phosphorus = CropRecommendationService.safe_float(
            data.get("phosphorus")
        )

        potassium = CropRecommendationService.safe_float(
            data.get("potassium")
        )

        organic_carbon = CropRecommendationService.safe_float(
            data.get("organic_carbon")
        )

        # KEEP ALL YOUR EXISTING CROP LOGIC BELOW THIS
        crops = []

        def build_crop(name, score, note):

            if score >= 8:
                status = "Highly Recommended"

            elif score >= 6:
                status = "Recommended"

            elif score >= 4:
                status = "Moderately Suitable"

            else:
                status = "Not Recommended"

            return {
                "crop": name,
                "score": round(score, 1),
                "status": status,
                "note": note,
            }

        # =====================================
        # PADDY
        # =====================================

        paddy_score = 5

        if ph <= 8:
            paddy_score += 1

        if nitrogen > 200:
            paddy_score += 1

        if phosphorus > 20:
            paddy_score += 1

        if potassium > 250:
            paddy_score += 0.5

        crops.append(
            build_crop(
                "Paddy",
                paddy_score,
                "Best suited for current soil"
            )
        )

        # =====================================
        # WHEAT
        # =====================================

        wheat_score = 5

        if ph < 8:
            wheat_score += 1

        if nitrogen > 220:
            wheat_score += 1

        if organic_carbon > 0.5:
            wheat_score += 0.5

        crops.append(
            build_crop(
                "Wheat",
                wheat_score,
                "Balanced fertility crop"
            )
        )

        # =====================================
        # SORGHUM
        # =====================================

        sorghum_score = 7

        if ph > 7:
            sorghum_score += 1

        crops.append(
            build_crop(
                "Sorghum",
                sorghum_score,
                "Tolerant to alkaline soil"
            )
        )

        # =====================================
        # PEARL MILLET
        # =====================================

        millet_score = 7.5

        crops.append(
            build_crop(
                "Pearl Millet",
                millet_score,
                "Drought tolerant"
            )
        )

        # =====================================
        # COTTON
        # =====================================

        cotton_score = 4

        if potassium > 300:
            cotton_score += 2

        if ph > 7:
            cotton_score += 1

        crops.append(
            build_crop(
                "Cotton",
                cotton_score,
                "Performs well in high K soil"
            )
        )

        # =====================================
        # PIGEON PEA
        # =====================================

        pigeon_score = 5

        if organic_carbon > 0.5:
            pigeon_score += 1

        if phosphorus > 20:
            pigeon_score += 1

        crops.append(
            build_crop(
                "Pigeon Pea",
                pigeon_score,
                "Good nitrogen fixer"
            )
        )

        # =====================================
        # GROUNDNUT
        # =====================================

        groundnut_score = 3

        if organic_carbon > 0.5:
            groundnut_score += 1

        if phosphorus > 20:
            groundnut_score += 1

        crops.append(
            build_crop(
                "Groundnut",
                groundnut_score,
                "Needs better organic matter"
            )
        )

        # =====================================
        # GREEN GRAM
        # =====================================

        green_score = 3

        if organic_carbon > 0.5:
            green_score += 1

        if nitrogen > 180:
            green_score += 1

        crops.append(
            build_crop(
                "Green Gram",
                green_score,
                "Sensitive to nutrient imbalance"
            )
        )

        # =====================================
        # TOMATO
        # =====================================

        tomato_score = 5

        if ph > 7.5:
            tomato_score -= 2

        if ec > 1:
            tomato_score -= 1

        crops.append(
            build_crop(
                "Tomato",
                tomato_score,
                "Sensitive to high pH"
            )
        )

        # =====================================
        # BRINJAL
        # =====================================

        brinjal_score = 4

        if ph > 7.5:
            brinjal_score -= 2

        crops.append(
            build_crop(
                "Brinjal",
                brinjal_score,
                "Needs rich organic matter"
            )
        )

        # =====================================
        # CAULIFLOWER
        # =====================================

        cauliflower_score = 4

        if ph > 7.5:
            cauliflower_score -= 2

        crops.append(
            build_crop(
                "Cauliflower",
                cauliflower_score,
                "Requires high micronutrients"
            )
        )

        crops = sorted(
            crops,
            key=lambda x: x["score"],
            reverse=True
        )

        return crops