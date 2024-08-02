import './style.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';

function Approvals() {

    const [approvals, setApprovals] = useState([]);
    const location = useLocation();
    const userData = location.state.userData;
    const userAtts = location.state.userAtts;

    //Fetch all organizations pending approvals for the System Admin
    async function getPendingApprovals() {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/org/requests`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);

            setApprovals(json);
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    useEffect(() => {
        getPendingApprovals();
    }, []);

    // Function to approve a pending organization
    async function approveOrg(name, email) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/org/request`;
        const adminEmail = userAtts.email;

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ org_name: name, creator_email: email, current_user_email: adminEmail, status: "APPROVED" }),
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const text = await response.text();
            console.log(text);

        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    // Function to deny a pending organization
    async function denyOrg(name, email) {
        const url = `https://7hbu1e48i3.execute-api.us-east-2.amazonaws.com/user/org/request`;
        const adminEmail = userAtts.email;

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ org_name: name, creator_email: email, current_user_email: adminEmail, status: "REJECTED" }),
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const text = await response.text();
            console.log(text);

        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    return (
        <HomeLayout>
            <body id='charcoal-background'>
                <InnerHomeLayout>
                    <SettingsSidebar />
                    <div className='blockbox'>
                        <SubheaderRegular header="Pending Approvals" channel={null}></SubheaderRegular>
                        <div className='content-box-wrapper'>
                            <div className='content-box'>
                                <div className='list'>
                                    {/* For each organization pending approval, render a component */}
                                    {approvals.map((approval, index) => (
                                        <div className='list-item' key={index}>
                                            <div className='list-item-text-wrapper'>
                                                {approval[0]}
                                                <div className='list-item-email-text'>{approval[1]}</div>
                                            </div>
                                            <div className='list-item-button-wrapper'>
                                                <button id="approve-btn" className='button-red wd-small' onClick={approveOrg(approval[0], approval[1])}>Approve</button>
                                                <button id="deny-btn" className='button-white wd-small' onClick={denyOrg(approval[0], approval[1])}>Deny</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </InnerHomeLayout>
            </body>
        </HomeLayout>
    );
}

export default Approvals;