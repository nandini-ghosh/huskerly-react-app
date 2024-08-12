import '../index.css';
import { GrAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Collapse from './Collapsible';
import { useLocation } from 'react-router-dom';


function GroupSideBanner() {
    const location = useLocation();
    const orgId = location.state.orgId;
    const orgName = location.state.orgName;
    const orgCount = location.state.orgCount;

    return (
        <div className='gsb-background'>
            <Link key={orgId} to={`/group-info/${orgId}`} state={{orgId, orgName, orgCount}}>
                <button className='gsb-header'>
                    <div className='gsb-header-title'>{orgName}</div>
                    <div className='gsb-header-members'>{orgCount} members</div>
                </button>
            </Link>

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