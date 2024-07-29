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
                    <SettingsSidebar />
                    <div className='blockbox'>
                        <SubheaderRegular header="Pending Approvals" channel={null}></SubheaderRegular>
                        <div className='content-box-wrapper'>
                            <div className='content-box'>
                                <div className='list'>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            Fintech Startup
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-red wd-small'>Approve</button>
                                            <button className='button-white wd-small'>Deny</button>
                                        </div>
                                    </div>
                                    <div className='list-item'>
                                    <div className='list-item-text-wrapper'>
                                            Huntington News
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-red wd-small'>Approve</button>
                                            <button className='button-white wd-small'>Deny</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </InnerHomeLayout>
            </body>
        </HomeLayout>
    );
}

export default Approvals;