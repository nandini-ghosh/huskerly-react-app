import './style.css';
import { useState } from 'react';

function JoinOrRegister() {
    return (
        <body id="white-background">
            <div className='dialogue-box'>
                <div className='dialogue-box-content'>
                    <div className='dialogue-box-text'>
                        Welcome to Huskerly!
                        <br></br>What would you like to do today?
                    </div>
                    <div className='button-white-outline large spacing-small'>Join an existing group</div>
                    <div className='button-white-outline large spacing-small'>Register a new group</div>
                </div>
            </div>
        </body>
    );
}

export default JoinOrRegister;