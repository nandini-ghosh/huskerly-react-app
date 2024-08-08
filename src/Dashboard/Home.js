import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import Chat from '../Messaging/Chat';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';

function Home() {
    document.body.setAttribute("id", "charcoal-background");
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
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner id={userOrgId} name={userOrgName} count={orgCount}></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                      <Chat />
                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default Home;