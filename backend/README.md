# Agro Intelligence Platform

AI-powered Soil Intelligence & PDF Report Generation Platform.

---

# Features

* Soil Health Analysis
* Nutrient Scoring
* Recommendation Engine
* Soil Health Score
* PDF Report Generation
* FastAPI Backend
* Jinja2 Templates
* WeasyPrint PDF Engine

---

# Project Structure

backend/

├── app/

│   ├── core/

│   ├── routes/

│   ├── services/

│   ├── templates/

│   ├── utils/

│   └── main.py

├── requirements.txt

├── run.py

└── README.md

---

# Installation

## Create Virtual Environment

python -m venv venv

---

## Activate Virtual Environment

### Windows

venv\Scripts\activate

### Linux/Mac

source venv/bin/activate

---

# Install Requirements

pip install -r requirements.txt

---

# Run FastAPI Server

python run.py

---

# Open Swagger Docs

http://127.0.0.1:8000/docs

---

# Generate Soil Report PDF

Run:

python test_report.py

Generated PDF:

final_soil_report.pdf

---

# Example Input

{
"farmer_name": "Pooja",
"village": "Belagavi",
"crop": "Paddy",
"ph": 7.88,
"ec": 0.71,
"organic_carbon": 0.53,
"nitrogen": 163,
"phosphorus": 43,
"potassium": 670
}

---

# Technologies Used

* FastAPI
* Python
* Jinja2
* WeasyPrint
* SQLAlchemy
* Pydantic

---

# Future Improvements

* PostgreSQL Integration
* JWT Authentication
* React Frontend
* Heatmaps
* Crop Suitability Engine
* Carbon Credit Engine
* AI Yield Prediction
