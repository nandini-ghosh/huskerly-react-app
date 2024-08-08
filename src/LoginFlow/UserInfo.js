import './style.css';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function UserInfo() {
    document.body.setAttribute("id", "white-background");
    
    const location = useLocation();
    const userData = location.state.userData
    const userAtts = location.state.userAtts
    const [userOrgName, setUserOrgName] = useState();
    const userOrgId = userAtts["custom:OrgId"];

    console.log(userData)
    console.log(userAtts)

    console.log(userAtts["custom:OrgId"]);
    console.log(userOrgName);

    useEffect(() => {
        getOrgName(userOrgId);
    }, [])

    async function getOrgName(id) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/message/org/${id}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();

            console.log(json.Data.name);
            setUserOrgName(json.Data.name);
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    return (
        <body style={{ backgroundColor: "white" }}>
            <div className='contents-center'>
                <div className='user-icon-xl'><FaUserCircle /></div>
                <div className='caption-wrapper'>
                    <div className='caption-text username'> Welcome {userAtts.name}! </div>
                    <div className='caption-text email'> {userAtts.email} </div>
                </div>
                <div className='organization-list-wrapper'>
                    <div className='caption-text'>Your Group</div>
                    <div className='organization-tab'>
                        <div className='organization-logo'></div>
                        <div className='organization-label'> {userOrgName} </div>
                    </div>
                </div>
                <Link to="/home"><div className='button-black wd-large spacing-large'>Join group</div></Link>
                <Link to="/register" state={{userData, userAtts}} ><div className='link-text'>Register a new group instead</div></Link>
            </div>
        </body>
    );
}

export default UserInfo;