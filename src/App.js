import logo from './logo-husky.png';
import './App.css';
import cors from "cors";
import { useState } from 'react';

// Imports the Amplify library from 'aws-amplify' package. This is used to configure your app to interact with AWS services.
import { Amplify } from 'aws-amplify';

// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import '@aws-amplify/ui-react/styles.css';

// Imports the awsExports configuration file generated by the Amplify CLI. This file contains the AWS service configurations (like Cognito, AppSync, etc.) specific to your project.
import awsExports from './aws-exports';

// Configures the Amplify library with the settings from aws-exports.js, which includes all the AWS service configurations for this project.
Amplify.configure(awsExports);

function App() {
  const [data, setData] = useState(null)

  const handleClick = async () => {
    try {
      const response = await fetch('https://zi56v3r5xl.execute-api.us-east-2.amazonaws.com/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON data
      console.log(data); // Log the data to verify it
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <div className="App">
      <Authenticator>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Huskerly</h1>
          <div className='App-body'>
            Coming soon...
          </div>
          <button className='button-red' onClick={handleClick}>See message</button>
          <div>{data && JSON.stringify(data)}</div>
        </header>
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);




