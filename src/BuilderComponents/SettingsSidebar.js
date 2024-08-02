import '../index.css';
import { FaUserCircle } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';

function SettingsSidebar() {
    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();
    const [isSysAdmin, setIsSysAdmin] = useState(false);

    const location = useLocation();

    // Get the stuff from Cognito 
    useEffect(() => {
        async function fetchUser() {
            try {
                // Get user's data
                const uD = await getCurrentUser();
                setUserData(uD);

                // Get user's attributes
                const uA = await fetchUserAttributes();
                setUserAtts(uA);

                // Check if the current user is a system admin and update state
                if (uA) {
                    const permissions = await getUserPermissions(uA.email);
                    if (permissions === '"SYS_ADMIN"') {
                        setIsSysAdmin(true);
                    }
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);

    // Function to fetch user permissions for the current user. Returns a string that represents the user group
    async function getUserPermissions(email) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/permission/${email}`;

        try {
            // Fetch the user's permission group
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const text = await response.text(); 
            console.log(text);

            // Return the permission group text
            return text;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    return (
        <div className="settings-sidebar">
            <div className='user-sidebar-wrapper'>
                <Link to="/profile" state={{userData, userAtts}}><div id="user-settings" className={`icon-sidebar white ${location.pathname === '/profile' ? 'active' : ''}`}><FaUserCircle /></div></Link>
            </div>
            <div className='icons-sidebar-wrapper'>
                <Link to={"/approvals"}>
                    <div id="approval-settings" className={`icon-sidebar ${isSysAdmin ? '' : 'hidden'} ${location.pathname === '/approvals' ? 'active' : ''}`}>
                        <BsFillCheckSquareFill />
                    </div>
                </Link>
                <Link to={"/manage-organizations"}>
                    <div id="org-settings" className={`icon-sidebar ${isSysAdmin ? '' : 'hidden'} ${location.pathname === '/manage-organizations' ? 'active' : ''}`}>
                        <FaGear />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SettingsSidebar;
