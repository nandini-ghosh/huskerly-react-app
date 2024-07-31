import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { fetchUserAttributes, getCurrentUser, signOut } from 'aws-amplify/auth';

// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function JoinOrRegister() {

    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();
    const navigate = useNavigate();

    // Get the stuff from Cognito 
    useEffect(() => {
        async function fetchUser() {
            try {
                // temp var for getting user's data
                const uD = await getCurrentUser();
                setUserData(uD);

                // temp var for getting user's attributes
                const uA = await fetchUserAttributes();
                setUserAtts(uA);
                console.log(uA)
                console.log(uA.email);
                console.log(uD);

                //check if the current user is a system admin and navigate to the approvals page instead
                if (uA) {
                    const permissions = await getUserPermissions(uA.email);
                    if (permissions==='"SYS_ADMIN"') {
                        navigate('/approvals'); // Navigate to the Approvals component
                    }
                }

            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);


    // Function to fetch user permissions for the current user. Returns a string that represents the user group
    async function getUserPermissions(email) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/users/permission/${email}/1`;

        try {
            //fetch the user's permission group
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const text = await response.text(); 
            console.log(text);

            // Return the permission group text
            return text;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

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
                        <Link to={{ pathname: "/join" }} state={{ userData, userAtts }}><div className='button-white-outline wd-large spacing-small'  >Join an existing group</div> </Link>
                        <Link to={{ pathname: "/register" }} state={{ userData, userAtts }}><div className='button-white-outline wd-large spacing-small'>Register a new group</div> </Link>
                        <button className='button-white-outline wd-large spacing-small' onClick={handleLogOutClick()} >Temp Log Out</button>
                    </div>
                </div>
            </body>
        </Authenticator>
    );
}

export default withAuthenticator(JoinOrRegister)