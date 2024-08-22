import { useState } from 'react';
import '../index.css';
import './style.css';
import { LuSendHorizonal } from "react-icons/lu";

function TypingBox( {onSendMessage} ){
    const [textValue, setTextValue] = useState('');

    const handleTextUpdate = (val) => {
        setTextValue(val.target.value);
    };

    const storeMessageToSend = () => {
        if (textValue.trim() !== '') {
            onSendMessage(textValue)
        }        
        setTextValue("");
    }

    return (
        <div className='typing-box'>
            <div className='typing-box-wrapper'>
            <input className='typing-box-input' placeholder="Type something here..." value={textValue} 
                    onChange={handleTextUpdate}></input>
            <button id="send-message-btn" className='typing-box-icon' onClick={storeMessageToSend}><LuSendHorizonal /></button>
            </div>
        </div>
    );
}

export default TypingBox;