import re
import cv2
import numpy as np
from paddleocr import PaddleOCR

ocr = PaddleOCR(
    use_angle_cls=True,
    lang='en'
)


# =========================================
# CLEAN CROP NAMES
# =========================================

def clean_crop_name(crop):

    if not crop:
        return "Unknown"

    crop = crop.lower()

    mapping = {
        "paddym": "Paddy",
        "paddy": "Paddy",
        "wheat": "Wheat",
        "sorghum": "Sorghum",
        "mango": "Mango",
        "cotton": "Cotton",
        "groundnut": "Groundnut",
        "tomato": "Tomato",
        "brinjal": "Brinjal",
    }

    for key, value in mapping.items():

        if key in crop:
            return value

    return crop.title()


# =========================================
# EXTRACT VALUE
# =========================================

def extract_value(pattern, text):

    match = re.search(
        pattern,
        text,
        re.IGNORECASE
    )

    return (
        match.group(1).strip()
        if match
        else "Not Detected"
    )


# =========================================
# MAIN OCR FUNCTION
# =========================================

def extract_receipt_data(image_bytes):

    # =====================================
    # CONVERT BYTES → IMAGE
    # =====================================

    np_array = np.frombuffer(
        image_bytes,
        np.uint8
    )

    image = cv2.imdecode(
        np_array,
        cv2.IMREAD_COLOR
    )

    # =====================================
    # OCR
    # =====================================

    result = ocr.ocr(image)

    extracted_text = []

    for line in result:

        for word_info in line:

            text = word_info[1][0]

            extracted_text.append(text)

    full_text = " ".join(extracted_text)

    print("\n=========== OCR TEXT ===========\n")
    print(full_text)

    data = {}

        # =====================================
    # BASIC INFO
    # =====================================

    name_match = re.search(
        r"Name[:\-]?\s*([A-Z ]+?)\s+Mobile",
        full_text,
        re.IGNORECASE
    )

    data["farmer_name"] = (
        name_match.group(1).strip()
        if name_match
        else "Not Detected"
    )

    data["phone_number"] = extract_value(
        r"Mobile[:\-]?\s*(\d{10})",
        full_text
    )

    crop_match = re.search(
        r"Crop[:\-]?\s*([A-Za-z ]+?)\s+Lat\/Lon",
        full_text,
        re.IGNORECASE
    )

    crop = (
        crop_match.group(1).strip()
        if crop_match
        else "Unknown"
    )

    data["crop"] = clean_crop_name(crop)

    data["location"] = extract_value(
        r"Lat\/Lon[:\-]?\s*([\d\.\/]+)",
        full_text
    )

    # =====================================
    # DATE & TIME
    # =====================================

    date_match = re.search(
        r"(\d{2}/\d{2}/\d{4})",
        full_text
    )

    time_match = re.search(
        r"(\d{2}:\d{2})\s*PM",
        full_text,
        re.IGNORECASE
    )

    data["report_date"] = (
        date_match.group(1)
        if date_match
        else "N/A"
    )

    data["report_time"] = (
        f"{time_match.group(1)} PM"
        if time_match
        else "N/A"
    )

    # =====================================
    # SOIL VALUES
    # =====================================

    data["organic_carbon"] = extract_value(
        r"OC.*?([0-9]+\.[0-9]+)",
        full_text
    )

    nitrogen_match = re.search(
        r"N\d+\-\d+\s*kg\/ha([0-9]+\.[0-9]+)",
        full_text,
        re.IGNORECASE
    )

    data["nitrogen"] = (
        nitrogen_match.group(1)
        if nitrogen_match
        else "0"
    )

    phosphorus_match = re.search(
        r"P\d+\-\d+\s*kg\/ha([0-9]+\.[0-9]+)",
        full_text,
        re.IGNORECASE
    )

    data["phosphorus"] = (
        phosphorus_match.group(1)
        if phosphorus_match
        else "0"
    )

    potassium_match = re.search(
        r"K\d+\-\d+\s*kg\/ha([0-9]+\.[0-9]+)",
        full_text,
        re.IGNORECASE
    )

    data["potassium"] = (
        potassium_match.group(1)
        if potassium_match
        else "0"
    )

    data["calcium"] = extract_value(
        r"Ca.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["magnesium"] = extract_value(
        r"Mg.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["sulfur"] = extract_value(
        r"S\d+\-\d+\s*ppm([0-9]+\.[0-9]+)",
        full_text
    )

    data["iron"] = extract_value(
        r"Fe.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["manganese"] = extract_value(
        r"Mn.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["copper"] = extract_value(
        r"Cu.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["zinc"] = extract_value(
        r"Zn.*?([0-9]+\.[0-9]+)",
        full_text
    )

    data["boron"] = extract_value(
        r"B0\.1\-10\s*ppm([0-9]+\.[0-9]+)",
        full_text
    )

    # =====================================
    # PH
    # =====================================

    ph_match = re.search(
        r"pH\s*0\-14\s*([0-9]+\.[0-9]+)",
        full_text,
        re.IGNORECASE
    )

    data["ph"] = (
        ph_match.group(1)
        if ph_match
        else "0"
    )

    # =====================================
    # EC
    # =====================================

    ec_match = re.search(
        r"EC0\.1\-30\s*dS\/m([0-9]+\.[0-9]+)",
        full_text,
        re.IGNORECASE
    )

    data["ec"] = (
        ec_match.group(1)
        if ec_match
        else "0"
    )
    # =====================================
    # RAW TEXT
    # =====================================

    data["full_text"] = full_text

    print("\n=========== FINAL DATA ===========\n")
    print(data)

    return data