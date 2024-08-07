import '../index.css';
import { useState } from 'react'
import { GrAdd } from "react-icons/gr";

import Collapse from './Collapsible';


function GroupSideBanner({orgName, orgCount}) {


    return (
        <div className='gsb-background'>
            <div className='gsb-header'>
                <div className='gsb-header-title'>{orgName}</div>
                <div className='gsb-header-members'>{orgCount} members</div>
            </div>

            <div className='gsb-content'>
                Teams

                <Collapse collapsed={true} title={"GENERAL"} content={"#default"} >
                </Collapse>

                <button className='gsb-collapsible-team'> <div className='gsb-icon'><GrAdd /></div> Add team </button>
            </div>

            <div className='gsb-content'>
                Direct Messages

                <button className='gsb-collapsible-team'> <div className='gsb-icon'><GrAdd /></div> Add colleague </button>

            </div>
        </div>
    );
}

export default GroupSideBanner;