import '../index.css';
import { GrAdd } from "react-icons/gr";
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';

import Collapse from './Collapsible';


function GroupSideBanner() {

    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();
    const [orgCount, setOrgCount] = useState();
    const [userOrgName, setUserOrgName] = useState();
    const [userOrgId, setUserOrgId] = useState()

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
                setUserOrgId(uA["custom:OrgId"]);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        fetchUser();
    }, []);

    useEffect(() => {
        async function getOrgInfo(id) {
            if (!id) return;

            const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/message/org/${id}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setOrgCount(json.Data.user_count);
                setUserOrgName(json.Data.name);
            } catch (error) {
                console.error(error.message);
            }
        }

        getOrgInfo(userOrgId);
    }, [userOrgId]);

    return (
        <div className='gsb-background'>
            <Link to="/">
                <button className='gsb-header'>
                    <div className='gsb-header-title'>{userOrgName}</div>
                    <div className='gsb-header-members'>{orgCount} members</div>
                </button>
            </Link>

            <div className='gsb-content'>
                Teams

                <Collapse collapsed={true} title={"GENERAL"} content={"#default"} >
                </Collapse>

                <button className='gsb-collapsible-team'> <div className='gsb-icon'><GrAdd /></div> Add team </button>
            </div>

            <div className='gsb-content'>
                Direct Messages

                <button className='gsb-collapsible-team'> <div className='gsb-icon'><GrAdd /></div> Add colleague </button>

            </div>
        </div>
    );
}

export default GroupSideBanner;