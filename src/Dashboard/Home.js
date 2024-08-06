import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import Chat from '../Messaging/Chat';

function Home() {
    document.body.setAttribute("id", "charcoal-background");

    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner />
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                      <Chat />
                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default Home;