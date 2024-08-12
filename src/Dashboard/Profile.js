import { useState } from 'react';
import { FaLock } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';
import './style.css';
import '../index.css'

function Profile() {
    document.body.setAttribute("id", "charcoal-background");

    const location = useLocation();
    const userData = location.state.userData;
    const userAtts = location.state.userAtts;
    const userRole = location.state.userRole;

    const navigate = useNavigate();

    console.log(userRole);

    const handleLogOutClick = () => {
        console.log("Log out");
        signOut();
        navigate("/");
    };

    const getUserRoleString = (role) => {
        switch (role) {
            case "SYS_ADMIN":
                return "System Admin";
            case "ORG_ADMIN":
                return "Organization Admin"
            case "ASSIST_ADMIN'":
                return "Assistant Admin"
            case "MEMBER":
                return "Member";
            case "NONE":
                return "Unregistered";
        }
    }

    return (
        <HomeLayout>
            <InnerHomeLayout>
                <SettingsSidebar/>
                <div className='blockbox'>
                    <SubheaderRegular header="My Profile" channel={null}></SubheaderRegular>
                    <div className='content-box-wrapper'>
                        <div className='content-box'>
                            <div className='profile-picture-wrapper'>
                                <div className='profile-picture'>

                                </div>
                            </div>

                            <div className='profile-fields-wrapper'>
                                <div className='profile-field'>
                                    <div className='input-field-label charcoal'>Username</div>
                                    <input id="username" className='input-field charcoal' value={userAtts.name}></input>
                                </div>
                                <div className='profile-field'>
                                    <div className='input-field-label charcoal'><div className="input-field-label-icon"><FaLock /></div>Email address</div>
                                    <input id="email" className='input-field charcoal' value={userAtts.email} disabled></input>
                                </div>
                                <div className='profile-field'>
                                    <div className='input-field-label charcoal'>User Role</div>
                                    <div className='input-field charcoal'>{getUserRoleString(userRole)}</div>
                                </div>
                                <div className='profile-field'>
                                    <button className='button-white-outline' onClick={handleLogOutClick}>Sign out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerHomeLayout>
        </HomeLayout>
    );
}

export default Profile;