import { useState } from "react"

const Collapse = ({ collapsed, title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);


    return (
        <>
            <button className='gsb-collapsible-team' onClick={() => setIsCollapsed(!isCollapsed)}> {title} </button>
            
            <div className={`gsb-${isCollapsed ? 'collapsed' : 'opened'}-content`}
            aria-expanded={isCollapsed}>
            {content}
            </div>
        </>
    );
};

export default Collapse;



