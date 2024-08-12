import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import Chat from '../Messaging/Chat';
import { useLocation } from 'react-router-dom';

function Home() {
    document.body.setAttribute("id", "charcoal-background");
    const location = useLocation();
    const userData = location.state.userData;
    const userAtts = location.state.userAtts;
    const orgId = location.state.orgId;
    const orgName = location.state.orgName;
    const orgCount = location.state.orgCount;
    
    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar/>
                    <GroupSideBanner state={{orgId, orgName, orgCount}}></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                      <Chat />
                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default Home;