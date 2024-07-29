import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';

function Home() {
    return (
        <HomeLayout>
            <body id='charcoal-background'>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner />
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                    </div>
                </InnerHomeLayout>
            </body>
        </HomeLayout>
    );
}

export default Home;