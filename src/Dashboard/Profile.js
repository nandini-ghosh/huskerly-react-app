import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';

function Profile() {
    const location = useLocation();
    const userData = location.state.userData;
    const userAtts = location.state.userAtts;

    const handleLogOutClick = () => {
        console.log("Log out");
        signOut();
    };

    return (
        <button onClick={handleLogOutClick}>Sign out</button>
    );
}

export default Profile;