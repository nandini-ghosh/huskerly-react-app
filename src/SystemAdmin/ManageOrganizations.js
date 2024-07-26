import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';

function ManageOrganizations() {
    return (
        <HomeLayout>
            <body id='charcoal-background'>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <div className='blockbox'>
                        <SubheaderRegular text="Manage Organizations"></SubheaderRegular>
                        <div className='content-box-wrapper'>
                            <div className='content-box'>
                                <div className='list'>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            Northeastern Event Planning Club
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-white wd-small'>Manage</button>
                                        </div>
                                    </div>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            Huntington News
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-white wd-small'>Manage</button>
                                        </div>
                                    </div>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            SCOUT
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-white wd-small'>Manage</button>
                                        </div>
                                    </div>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            Animation Club
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-white wd-small'>Manage</button>
                                        </div>
                                    </div>
                                    <div className='list-item'>
                                        <div className='list-item-text-wrapper'>
                                            Electric Racing Organization
                                        </div>
                                        <div className='list-item-button-wrapper'>
                                            <button className='button-white wd-small'>Manage</button>
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

export default ManageOrganizations;