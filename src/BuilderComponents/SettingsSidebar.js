import '../index.css';
import { FaUserCircle } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";

function SettingsSidebar() {
    return (
        <div className="settings-sidebar">
            <div className='user-sidebar-wrapper'>
                <div className='icon-sidebar white'><FaUserCircle /></div>
            </div>
            <div className='icons-sidebar-wrapper'>
                <div className='icon-sidebar active'><BsFillCheckSquareFill /></div>
                <div className='icon-sidebar'><FaGear /></div>
            </div>
        </div>

    );
}

export default SettingsSidebar;