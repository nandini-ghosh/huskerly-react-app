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

    document.body.setAttribute("id", "white-background");

    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();

    const [orgCount, setOrgCount] = useState();
    const [orgName, setOrgName] = useState();
    const [orgId, setOrgId] = useState();
    
    const navigate = useNavigate();

    // Get the stuff from Cognito 
    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch user data
                const uD = await getCurrentUser();
                setUserData(uD);

                // Fetch user attributes
                const uA = await fetchUserAttributes();
                setUserAtts(uA);
                setOrgId(uA["custom:OrgId"]);
                
                // Log the user attributes and ID for debugging
                console.log(uA);
                console.log(uA.email);
                console.log(uD);

                // Fetch organization info if orgId is available
                if (uA["custom:OrgId"]) {
                    const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/message/org/${uA["custom:OrgId"]}`;
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }

                    const json = await response.json();
                    setOrgCount(json.Data.user_count);
                    setOrgName(json.Data.name);
                    
                    // Log the organization details for debugging
                    console.log(json.Data.name);
                    console.log(json.Data.user_count);
                }

                // Check user permissions
                if (uA) {
                    const permissions = await getUserPermissions(uA.email);
                    console.log(permissions);
                    if (permissions === "SYS_ADMIN") {
                        navigate('/approvals');
                    }
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [navigate]);


    // Function to fetch user permissions for the current user. Returns a string that represents the user group
    async function getUserPermissions(email) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/permission/${email}`;

        try {
            //fetch the user's permission group
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json(); 
            console.log(json.Permission);

            // Return the permission group text
            return json.Permission;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    return (
        <Authenticator>
            
                <div className='dialogue-box'>
                    <div className='dialogue-box-content'>
                        <div className='dialogue-box-text'>
                            Welcome to Huskerly!
                            <br></br>What would you like to do today?
                        </div>
                        <Link to={{ pathname: "/join" }} state={{ userData, userAtts, orgId, orgName, orgCount }}><div className='button-white-outline wd-large spacing-small'  >Join an existing group</div> </Link>
                        <Link to={{ pathname: "/register" }} state={{ userData, userAtts }}><div className='button-white-outline wd-large spacing-small'>Register a new group</div> </Link>
                    </div>
                </div>
           
        </Authenticator>
    );
}

export default withAuthenticator(JoinOrRegister)