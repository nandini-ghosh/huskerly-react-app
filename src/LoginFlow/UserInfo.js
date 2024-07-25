import './style.css';
import { useState } from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';


function UserInfo() {
    const location = useLocation();
    const userData = location.state.userData
    const userAtts = location.state.userAtts

    console.log(userData)
    console.log(userAtts)


    return (
        <body id="white-background">
            <div className='contents-center'>
                <div className='user-icon-xl'><FaUserCircle/></div>
                <div className='caption-wrapper'>
                    <div className='caption-text username'> Welcome {userData.username}! </div>
                    <div className='caption-text email'> { userAtts.email } </div>
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