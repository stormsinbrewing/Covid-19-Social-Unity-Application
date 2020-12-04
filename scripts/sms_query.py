import pymongo
from twilio.rest import Client
from pymongo import MongoClient

account_sid = 'ACa1eb3914142a6680c907b530e0c80fb5' 
auth_token = ${{ secrets.TWILIO_KEY }}
client = Client(account_sid, auth_token)
cluster = MongoClient("mongodb+srv://Admin:administrator@cluster0.mrmt6.mongodb.net/googlesheetsdb?retryWrites=true&w=majority")

db = cluster["googlesheetsdb"]
collection = db["Area_Codes"]

results = collection.find({"pin":"226012"})

local = []

for result in results:
   local.append(result["Number"])
print(local)

for number in local:
   number = "+91" + number
   message = client.messages.create( from_='+14158492223',body='Where they at tho',to=number)
