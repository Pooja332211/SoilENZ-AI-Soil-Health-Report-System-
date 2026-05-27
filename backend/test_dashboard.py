import requests

import json

url = "http://127.0.0.1:8000/dashboard/generate"

payload = {


"farmer_name": "Pooja",

"village": "Belagavi",

"crop": "Paddy",

"farm_size": 2,

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

dashboard = response.json()

print(
json.dumps(
dashboard,
indent=4
)
)
