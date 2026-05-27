from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

import easyocr
import shutil
import re
import os

# ====================================
# FASTAPI
# ====================================

app = FastAPI()

# ====================================
# CORS
# ====================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ====================================
# OCR ENGINE
# ====================================

reader = easyocr.Reader(["en"])

# ====================================
# ROOT
# ====================================

@app.get("/")
def home():

    return {
        "message": "SoilENZ Backend Running"
    }

# ====================================
# EXTRACT FUNCTION
# ====================================

def extract(pattern, text, default="N/A"):

    match = re.search(pattern, text, re.IGNORECASE)

    if match:
        return match.group(1).strip()

    return default

# ====================================
# GENERATE REPORT
# ====================================

@app.post("/generate-report")
async def generate_report(file: UploadFile = File(...)):

    # ====================================
    # SAVE FILE
    # ====================================

    temp_path = f"temp_{file.filename}"

    with open(temp_path, "wb") as buffer:

        shutil.copyfileobj(file.file, buffer)

    # ====================================
    # OCR READ
    # ====================================

    results = reader.readtext(
        temp_path,
        detail=0
    )

    text = " ".join(results)

    # CLEAN TEXT

    text = text.replace("\n", " ")

    text = re.sub(r"\s+", " ", text)

    print("\n================ OCR TEXT ================\n")

    print(text)

    print("\n==========================================\n")

    # ====================================
    # EXTRACT VALUES
    # ====================================

    farmer_name = extract(
        r"Name[:;\s]+([A-Za-z]+)",
        text
    )

    mobile = extract(
        r"Mobile[:;\s]+([0-9]{10})",
        text
    )

    crop = extract(
        r"Crop[:;\s]+([A-Za-z]+)",
        text
    )

    latlon = extract(
        r"Lat\/Lon[:;\s]+([0-9\.\/]+)",
        text
    )

    ph = extract(
        r"pH.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    nitrogen = extract(
        r"N.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    phosphorus = extract(
        r"P.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    potassium = extract(
        r"K.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    organic_carbon = extract(
        r"OC.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    sulfur = extract(
        r"S.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    ec = extract(
        r"EC.*?([0-9]+[\.,][0-9]+)",
        text
    ).replace(",", ".")

    # ====================================
    # SAFE FLOAT CONVERSION
    # ====================================

    try:
        ph_value = float(ph)
    except:
        ph_value = 7.0

    try:
        n_value = float(nitrogen)
    except:
        n_value = 200

    try:
        p_value = float(phosphorus)
    except:
        p_value = 40

    try:
        k_value = float(potassium)
    except:
        k_value = 300

    try:
        oc_value = float(organic_carbon)
    except:
        oc_value = 0.5

    try:
        sulfur_value = float(sulfur)
    except:
        sulfur_value = 20

    # ====================================
    # DYNAMIC AI SCORING
    # ====================================

    soil_score = 50

    # pH

    if 6.0 <= ph_value <= 7.5:
        soil_score += 15
    else:
        soil_score += 5

    # NITROGEN

    if n_value > 280:
        soil_score += 20
    elif n_value > 150:
        soil_score += 10
    else:
        soil_score += 5

    # PHOSPHORUS

    if p_value > 22:
        soil_score += 10
    else:
        soil_score += 5

    # POTASSIUM

    if k_value > 280:
        soil_score += 15
    else:
        soil_score += 5

    # ORGANIC CARBON

    if oc_value > 0.75:
        soil_score += 15
    elif oc_value > 0.5:
        soil_score += 10
    else:
        soil_score += 5

    soil_score = min(100, soil_score)

    # ====================================
    # CARBON SCORE
    # ====================================

    carbon_score = int(
        (oc_value * 100) + 20
    )

    carbon_score = min(100, carbon_score)

    # ====================================
    # AI RECOMMENDATIONS
    # ====================================

    recommendations = []

    if n_value < 280:

        recommendations.append(
            "Apply split nitrogen fertilizer doses"
        )

    if ph_value > 7.5:

        recommendations.append(
            "Use organic compost to reduce alkalinity"
        )

    if oc_value < 0.75:

        recommendations.append(
            "Increase organic matter and vermicompost"
        )

    if sulfur_value < 20:

        recommendations.append(
            "Apply sulfur-based micronutrients"
        )

    recommendations.append(
        "Use precision irrigation practices"
    )

    recommendations.append(
        "Adopt sustainable carbon farming"
    )

    # ====================================
    # REPORT JSON
    # ====================================

    report = {

        "farmer_name": farmer_name,

        "mobile": mobile,

        "crop": crop,

        "latlon": latlon,

        "village": "AI Extracted Village",

        "soil_type": "Black Soil",

        "season": "Kharif 2026",

        "soil_score": soil_score,

        "carbon_score": carbon_score,

        "ph": ph,

        "nitrogen": nitrogen,

        "phosphorus": phosphorus,

        "potassium": potassium,

        "organic_carbon": organic_carbon,

        "sulfur": sulfur,

        "ec": ec,

        "recommendations": recommendations,

        "status": "success"
    }

    # ====================================
    # DELETE TEMP FILE
    # ====================================

    if os.path.exists(temp_path):

        os.remove(temp_path)

    # ====================================
    # RETURN RESPONSE
    # ====================================

    return JSONResponse(content=report)