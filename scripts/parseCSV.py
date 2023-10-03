import pandas as pd
import json

df = pd.read_csv("../data/RawData.csv")

json_data = df.to_json(orient="records")

with open("../data/mainData.json", "w") as f:
    f.write(json_data)
