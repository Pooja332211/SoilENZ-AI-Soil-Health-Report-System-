import requests

url = "http://127.0.0.1:8000/pdf/generate"

payload = {


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

response = requests.post(
url,
json=payload
)

with open(
"final_soil_report.pdf",
"wb"
) as file:

    file.write(response.content)

    print(
    "PDF Generated Successfully"
    )
