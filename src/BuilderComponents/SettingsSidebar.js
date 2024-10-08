import '../index.css';
import { FaUserCircle } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';

function SettingsSidebar() {
    const [userData, setUserData] = useState({
        username: "Jane Doe",
        userID: "0"
    });

    const [userAtts, setUserAtts] = useState();
    const [userRole, setUserRole] = useState();
    const [orgCount, setOrgCount] = useState();
    const [orgName, setOrgName] = useState();
    const [orgId, setOrgId] = useState();

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
                setOrgId(uA["custom:OrgId"]);

                // Fetch organization info if orgId is available
                if (uA["custom:OrgId"]) {
                    const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/message/org/${uA["custom:OrgId"]}`;
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                    }

                    const json = await response.json();
                    setOrgCount(json.Data.user_count);
                    setOrgName(json.Data.name);
                    
                    // Log the organization details for debugging
                    console.log(json.Data.name);
                    console.log(json.Data.user_count);
                }

                // Check if the current user is a system admin and update state
                if (uA) {
                    const permissions = await getUserPermissions(uA.email);
                    setUserRole(permissions);
                    console.log(userRole);
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

            const json = await response.json();
            console.log(json.Permission);

            // Return the permission group text
            return json.Permission;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    return (
        <div className="settings-sidebar">
            <div className='user-sidebar-wrapper'>
                <Link to="/profile" state={{ userData, userAtts, userRole }}><div id="user-settings" className={`icon-sidebar white ${location.pathname === '/profile' ? 'active' : ''}`}><FaUserCircle /></div></Link>
            </div>
            <div className='icons-sidebar-wrapper'>
                <Link to={"/home"} state={{userData, userAtts, orgId, orgName, orgCount}}>
                    <div id="home-settings" className={`icon-sidebar ${userRole === "SYS_ADMIN" ? 'hidden' : ''} ${location.pathname === '/home' ? 'active' : ''}`}>
                        <FaHome />
                    </div>
                </Link>
                <Link to={"/approvals"}>
                    <div id="approval-settings" className={`icon-sidebar ${userRole === "SYS_ADMIN" ? '' : 'hidden'} ${location.pathname === '/approvals' ? 'active' : ''}`}>
                        <BsFillCheckSquareFill />
                    </div>
                </Link>
                <Link to={"/manage-organizations"}>
                    <div id="org-settings" className={`icon-sidebar ${userRole === "SYS_ADMIN" ? '' : 'hidden'} ${location.pathname === '/manage-organizations' ? 'active' : ''}`}>
                        <FaGear />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SettingsSidebar;
