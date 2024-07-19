import json


def handler(event, context):
    print('received event:')
    print(event)

    # proxy-1721309360289-huskerlydatabase1.proxy-che2wqk4qebu.us-east-2.rds.amazonaws.com
    # INSERT INTO users (email, org_id) VALUES ('test@email.com', 1);

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }
