import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import Chat from '../Messaging/Chat';
import { confirmResetPassword, fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    document.body.setAttribute("id", "charcoal-background");
    const location = useLocation();
    const userOrgId = location.state.userOrgId;
    const userOrgName = location.state.userOrgName;
    const [orgCount, setOrgCount] = useState();

    useEffect(() => {
        async function getOrgInfo(id) {
            console.log(userOrgId);
            const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/message/org/${id}`;
    
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
    
                const json = await response.json();
                setOrgCount(json.Data.user_count);
    
            } catch (error) {
                console.error(error.message);
                return null;
            }
        }
        getOrgInfo(userOrgId);
    }, [])

    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner orgName={userOrgName} orgCount={orgCount}></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                      <Chat />
                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default Home;