import '../index.css';
import { FaAngleRight } from "react-icons/fa6";

function SubheaderRegular({ header, channel }) {
    console.log(channel);
    if (channel === null) {
        return (
            <div className='subheader-bar'>
                <div className='subheader-label'>
                    {header}
                </div>
            </div>
        );
    } else {
        return (
            <div className='subheader-bar'>
                <div className='subheader-label'>{header}</div>
                <div className='subheader-icon'><FaAngleRight /></div>
                <div className='subheader-label'>{channel}</div>
            </div>
        );
    }
}

export default SubheaderRegular;