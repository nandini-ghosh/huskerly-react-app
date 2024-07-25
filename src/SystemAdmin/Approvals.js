import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';

function Approvals() {
    return (
        <HomeLayout>
            <body id='charcoal-background'>
                <InnerHomeLayout>
                    <SettingsSidebar/>
                    <div className='blockbox'>
                    <SubheaderRegular text="Pending Approvals"></SubheaderRegular>
                    <div className='content-box'>
                        
                    </div>
                    </div>
                </InnerHomeLayout>
            </body>
        </HomeLayout>
    );
}

export default Approvals;