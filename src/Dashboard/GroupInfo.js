import './style.css';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import GroupSideBanner from '../BuilderComponents/GroupSideBanner';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function GroupInfo() {
    document.body.setAttribute("id", "charcoal-background");
    const { orgId } = useParams();

    return (
        <HomeLayout>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <GroupSideBanner></GroupSideBanner>
                    <div className='blockbox'>
                        <SubheaderRegular header="General" channel="default"></SubheaderRegular>

                    </div>
                </InnerHomeLayout>
        </HomeLayout>
    );
}

export default GroupInfo;