def generate_crop_calendar(crop_name):

    calendars = {

        "Rice": [

            {
                "stage":
                    "Land Preparation",

                "timeline":
                    "Week 1",

                "activity":
                    "Plough field and prepare nursery"

            },

            {
                "stage":
                    "Transplanting",

                "timeline":
                    "Week 3",

                "activity":
                    "Transplant seedlings into main field"

            },

            {
                "stage":
                    "Fertilizer Application",

                "timeline":
                    "Week 5",

                "activity":
                    "Apply first nitrogen split"

            },

            {
                "stage":
                    "Irrigation Management",

                "timeline":
                    "Week 6-12",

                "activity":
                    "Maintain standing water"

            },

            {
                "stage":
                    "Harvesting",

                "timeline":
                    "Week 16",

                "activity":
                    "Harvest mature crop"

            },

        ],


        "Maize": [

            {
                "stage":
                    "Land Preparation",

                "timeline":
                    "Week 1",

                "activity":
                    "Deep ploughing and leveling"

            },

            {
                "stage":
                    "Sowing",

                "timeline":
                    "Week 2",

                "activity":
                    "Seed sowing"

            },

            {
                "stage":
                    "Fertilizer Application",

                "timeline":
                    "Week 4",

                "activity":
                    "Apply nitrogen top dressing"

            },

            {
                "stage":
                    "Irrigation",

                "timeline":
                    "Week 5-10",

                "activity":
                    "Critical irrigation scheduling"

            },

            {
                "stage":
                    "Harvest",

                "timeline":
                    "Week 14",

                "activity":
                    "Harvest mature cobs"

            },

        ],


        "Groundnut": [

            {
                "stage":
                    "Land Preparation",

                "timeline":
                    "Week 1",

                "activity":
                    "Prepare sandy loose soil"

            },

            {
                "stage":
                    "Sowing",

                "timeline":
                    "Week 2",

                "activity":
                    "Seed sowing"

            },

            {
                "stage":
                    "Gypsum Application",

                "timeline":
                    "Week 5",

                "activity":
                    "Apply gypsum"

            },

            {
                "stage":
                    "Flowering",

                "timeline":
                    "Week 7",

                "activity":
                    "Monitor moisture"

            },

            {
                "stage":
                    "Harvest",

                "timeline":
                    "Week 15",

                "activity":
                    "Harvest pods"

            },

        ],

    }


    return calendars.get(
        crop_name,
        []
    )