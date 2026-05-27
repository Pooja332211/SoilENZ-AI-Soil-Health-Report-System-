import random

class HeatmapService:


    @staticmethod
    def generate_heatmap(data):

        nutrients = [

            "ph",

            "ec",

            "organic_carbon",

            "nitrogen",

            "phosphorus",

            "potassium"

        ]

        heatmaps = {}

        for nutrient in nutrients:

            base_value = data[nutrient]

            grid = []

            for row in range(4):

                row_data = []

                for col in range(4):

                    variation = round(
                        random.uniform(-5, 5),
                        2
                    )

                    value = round(
                        base_value + variation,
                        2
                    )

                    row_data.append(value)

                grid.append(row_data)

            heatmaps[nutrient] = grid

        return heatmaps
    