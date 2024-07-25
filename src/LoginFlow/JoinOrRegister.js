import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';

var fetchedUser = false // this is probably bad practice

function JoinOrRegister() {

    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();

    // Get the stuff from Cognito 
    useEffect(() => {
        async function fetchUser() {
            try {
                const uD = await getCurrentUser();
                setUserData(uD)

                const uA = await fetchUserAttributes();
                setUserAtts(uA)

            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);


    return (
        <body id="white-background">
            <div className='dialogue-box'>
                <div className='dialogue-box-content'>
                    <div className='dialogue-box-text'>
                        Welcome to Huskerly!
                        <br></br>What would you like to do today?
                    </div>
                    <Link to={{ pathname: "/join" }} state={{ userData, userAtts }}><div className='button-white-outline wd-large spacing-small'>Join an existing group</div> </Link>
                    <Link to={{ pathname: "/register" }}><div className='button-white-outline wd-large spacing-small'>Register a new group</div> </Link>
                </div>
            </div>
        </body>
    );
}

export default JoinOrRegister