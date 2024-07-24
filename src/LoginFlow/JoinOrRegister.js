import './style.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function JoinOrRegister() {
    return (
        <body id="white-background">
            <div className='dialogue-box'>
                <div className='dialogue-box-content'>
                    <div className='dialogue-box-text'>
                        Welcome to Huskerly!
                        <br></br>What would you like to do today?
                    </div>
                    <Link to="/user-info"><div className='button-white-outline wd-large spacing-small'>Join an existing group</div></Link>
                    <div className='button-white-outline wd-large spacing-small'>Register a new group</div>
                </div>
            </div>
        </body>
    );
}

export default JoinOrRegister;