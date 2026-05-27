SOIL_THRESHOLDS = {

"ph": {
    "low": 6.0,
    "high": 7.5,

    "labels": {
        "low": "Acidic",
        "medium": "Neutral",
        "high": "Alkaline"
    },

    "scores": {
        "low": 40,
        "medium": 90,
        "high": 60
    },

    "colors": {
        "low": "red",
        "medium": "green",
        "high": "orange"
    },

    "recommendations": {
        "low": "Apply agricultural lime",
        "medium": "Ideal soil pH",
        "high": "Apply gypsum and organic matter"
    }
},

"ec": {
    "low": 0.2,
    "high": 1.0,

    "labels": {
        "low": "Low Salinity",
        "medium": "Normal",
        "high": "High Salinity"
    },

    "scores": {
        "low": 70,
        "medium": 90,
        "high": 40
    },

    "colors": {
        "low": "yellow",
        "medium": "green",
        "high": "red"
    },

    "recommendations": {
        "low": "Monitor salinity",
        "medium": "Good conductivity",
        "high": "Improve drainage and flush salts"
    }
},

"organic_carbon": {
    "low": 0.5,
    "high": 0.75,

    "labels": {
        "low": "Low",
        "medium": "Medium",
        "high": "High"
    },

    "scores": {
        "low": 40,
        "medium": 70,
        "high": 95
    },

    "colors": {
        "low": "red",
        "medium": "orange",
        "high": "green"
    },

    "recommendations": {
        "low": "Add compost and FYM",
        "medium": "Maintain organic inputs",
        "high": "Excellent organic matter"
    }
},

"nitrogen": {
    "low": 280,
    "high": 500,

    "labels": {
        "low": "Low",
        "medium": "Medium",
        "high": "High"
    },

    "scores": {
        "low": 40,
        "medium": 75,
        "high": 95
    },

    "colors": {
        "low": "red",
        "medium": "orange",
        "high": "green"
    },

    "recommendations": {
        "low": "Apply Urea",
        "medium": "Moderate nitrogen available",
        "high": "Nitrogen level is sufficient"
    }
},

"phosphorus": {
    "low": 22,
    "high": 56,

    "labels": {
        "low": "Low",
        "medium": "Medium",
        "high": "High"
    },

    "scores": {
        "low": 40,
        "medium": 80,
        "high": 95
    },

    "colors": {
        "low": "red",
        "medium": "orange",
        "high": "green"
    },

    "recommendations": {
        "low": "Apply DAP",
        "medium": "Maintain phosphorus",
        "high": "Phosphorus level sufficient"
    }
},

"potassium": {
    "low": 150,
    "high": 350,

    "labels": {
        "low": "Low",
        "medium": "Medium",
        "high": "High"
    },

    "scores": {
        "low": 40,
        "medium": 75,
        "high": 95
    },

    "colors": {
        "low": "red",
        "medium": "orange",
        "high": "green"
    },

    "recommendations": {
        "low": "Apply MOP fertilizer",
        "medium": "Potassium moderate",
        "high": "Potassium level sufficient"
    }
}


}
