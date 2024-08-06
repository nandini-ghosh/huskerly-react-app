import { useState } from "react"
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const Collapse = ({ collapsed, title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);


    return (
        <>
            <button className='gsb-collapsible-team' onClick={() => setIsCollapsed(!isCollapsed)}> {title}
                <div className="gsb-icon-collapsible">{isCollapsed ? <GoChevronDown /> : <GoChevronUp />}</div>
            </button>

            <div className={`gsb-${isCollapsed ? 'collapsed' : 'opened'}-content`}
                aria-expanded={isCollapsed}>
                {content}
            </div>
        </>
    );
};

export default Collapse;



