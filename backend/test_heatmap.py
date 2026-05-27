import requests

import json

url = "http://127.0.0.1:8000/heatmaps/generate"

payload = {


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

heatmaps = response.json()

print(
json.dumps(
heatmaps,
indent=4
)
)
