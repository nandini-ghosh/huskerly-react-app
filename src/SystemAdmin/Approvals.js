import './style.css';
import { useEffect, useState } from 'react';
import HomeLayout from '../BuilderComponents/HomeLayout';
import InnerHomeLayout from '../BuilderComponents/InnerHomeLayout';
import SettingsSidebar from '../BuilderComponents/SettingsSidebar';
import SubheaderRegular from '../BuilderComponents/SubheaderRegular';

function Approvals() {

    const [approvals, setApprovals] = useState([]);

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
                                                <button className='button-red wd-small'>Approve</button>
                                                <button className='button-white wd-small'>Deny</button>
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