import './style.css';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

function UserInfo() {
    return (
        <body id="white-background">
            <div className='contents-center'>
                <div className='user-icon-xl'><FaUserCircle/></div>
                <div className='caption-wrapper'>
                    <div className='caption-text username'>Jane Doe</div>
                    <div className='caption-text email'>jane.doe@company.com</div>
                </div>
                <div className='organization-list-wrapper'>
                    <div className='caption-text'>Your Group</div>
                    <div className='organization-tab'>
                        <div className='organization-logo'></div>
                        <div className='organization-label'>Northeastern Event Planning Club</div>
                    </div>
                </div>
                <div className='button-black wd-large spacing-large'>Join group</div>
            </div>
        </body>
    );
}

export default UserInfo;