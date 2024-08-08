import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EditOrg() {
    document.body.setAttribute("id", "charcoal-background");
    const location = useLocation();
    const userOrgId = location.state.userOrgId;
    const userOrgName = location.state.userOrgName;

    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>
                      <Chat />
                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default EditOrg;