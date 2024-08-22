import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function GroupInfo() {
    document.body.setAttribute("id", "charcoal-background");
    const location = useLocation();
    const orgId = location.state.orgId;
    const orgName = location.state.orgName;
    const orgCount = location.state.orgCount;

    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner state={{orgId, orgName, orgCount}}></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>

                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default GroupInfo;