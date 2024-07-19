import json
import os
import psycopg2
from dotenv import load_dotenv


def connect_to_database():
    # Retrieve environment variables
    db_host = os.environ['DB_HOST']
    db_name = os.environ['DB_NAME']
    db_user = os.environ['DB_USER']
    db_password = os.environ['DB_PASSWORD']

    # Establish a connection to the database
    conn = psycopg2.connect(
        dbname=db_name,
        user=db_user,
        password=db_password,
        host=db_host
    )
    return conn


def insert_test_data():
    conn = connect_to_database()
    cursor = conn.cursor()
    try:
        # Insert test data
        cursor.execute(
            "INSERT INTO users (email, org_id) VALUES ('test@email.com', 1);")
        conn.commit()
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        cursor.close()
        conn.close()


def handler(event, context):
    print('received event:')
    print(event)

    # Call the function to insert test data
    insert_test_data()

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }


load_dotenv()

# Mock event and context
event = {}
context = {}

# Invoke the handler
response = handler(event, context)
print(response)
