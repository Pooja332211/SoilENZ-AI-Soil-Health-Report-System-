class CropRecommendationService:


    @staticmethod
    def recommend_crops(data):

        crops = []

        ph = data["ph"]

        nitrogen = data["nitrogen"]

        organic_carbon = data["organic_carbon"]


        if (
            6.0 <= ph <= 7.5
            and nitrogen > 250
        ):

            crops.append({
                "crop": "Paddy",
                "score": 8.5,
                "status": "Highly Suitable"
            })


        if (
            ph > 7.0
            and organic_carbon > 0.5
        ):

            crops.append({
                "crop": "Wheat",
                "score": 7.5,
                "status": "Suitable"
            })


        if nitrogen < 200:

            crops.append({
                "crop": "Groundnut",
                "score": 6.5,
                "status": "Moderately Suitable"
            })


        if organic_carbon > 0.7:

            crops.append({
                "crop": "Sugarcane",
                "score": 9.0,
                "status": "Highly Suitable"
            })


        return crops
