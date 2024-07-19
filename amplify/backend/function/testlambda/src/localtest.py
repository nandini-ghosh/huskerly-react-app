from dotenv import load_dotenv
from index import handler

load_dotenv()

# Mock event and context
event = {}
context = {}

# Invoke the handler
response = handler(event, context)
print(response)
