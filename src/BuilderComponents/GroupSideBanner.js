import '../index.css';
import { GrAdd } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Collapse from './Collapsible';


function GroupSideBanner({id, name, count}) {

    return (
        <div className='gsb-background'>
            <Link key={id} to={`/group-info/${id}`}>
                <button className='gsb-header'>
                    <div className='gsb-header-title'>{name}</div>
                    <div className='gsb-header-members'>{count} members</div>
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