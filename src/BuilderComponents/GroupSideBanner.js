import '../index.css';
import { useState } from 'react'
import { GrAdd } from "react-icons/gr";

import Collapse from './Collapsible';


function GroupSideBanner() {


    return (
        <div className='gsb-background'>
            <div className='gsb-header'>
                <div className='gsb-header-title'> Northeastern Event Planning Club</div>
                <div className='gsb-header-members'>20 members</div>
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