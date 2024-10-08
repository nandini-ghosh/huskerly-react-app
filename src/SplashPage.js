import logo from './logo-husky.png';
import './index.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

// Imports the Amplify library from 'aws-amplify' package. This is used to configure your app to interact with AWS services.
import { Amplify } from 'aws-amplify';



// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import '@aws-amplify/ui-react/styles.css';

// Imports the awsExports configuration file generated by the Amplify CLI. This file contains the AWS service configurations (like Cognito, AppSync, etc.) specific to your project.
import awsExports from './aws-exports';

// Configures the Amplify library with the settings from aws-exports.js, which includes all the AWS service configurations for this project.
Amplify.configure(awsExports);

function SplashPage() {
    document.body.removeAttribute("id", "white-background");
    
    return (
        <div className="contents-center">
            <img src={logo} className="splash-logo" alt="logo" />
            <div className='splash-header'>Huskerly</div>
            <div className='splash-body'>
                Collaborate with the pack.
            </div>
            <Link to="/join-or-register">
                <button className='button-red wd-medium spacing-medium'>Get started</button>
            </Link>
        </div>
    );
}

// export default withAuthenticator(SplashPage);

export default SplashPage;




