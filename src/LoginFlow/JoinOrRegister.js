import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { fetchUserAttributes, getCurrentUser, signOut } from 'aws-amplify/auth';

// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function JoinOrRegister() {

    const [userData, setUserData] = useState({
        username : "Jane Doe",
        userID : "0"
    });

    const [userAtts, setUserAtts] = useState();
    
    // Get the stuff from Cognito 
    useEffect(() => {
        async function fetchUser() {
            try {
                const uD = await getCurrentUser();
                setUserData(uD);

                const uA = await fetchUserAttributes();
                setUserAtts(uA);
                console.log(uA)
                console.log(uD)
                        
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);

    const handleLogOutClick = () => {
        console.log("Log out");
        //signOut();
    };

    return (
        <Authenticator>
        <body id="white-background">
            <div className='dialogue-box'>
                <div className='dialogue-box-content'>
                    <div className='dialogue-box-text'>
                        Welcome to Huskerly!
                        <br></br>What would you like to do today?
                    </div>
                    <Link to={{pathname: "/user-info"}} state={{userData, userAtts}}><div className='button-white-outline wd-large spacing-small'  >Join an existing group</div> </Link>
                    <div className='button-white-outline wd-large spacing-small'>Register a new group</div>
                    <button className='button-white-outline wd-large spacing-small' onClick={handleLogOutClick()} >Log Out!</button>
                </div>
            </div>
        </body>
        </Authenticator>
    );
}

export default withAuthenticator(JoinOrRegister)