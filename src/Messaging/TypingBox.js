import '../index.css';
import './style.css';
import { LuSendHorizonal } from "react-icons/lu";

function TypingBox(){
    return (
        <div className='typing-box'>
            <div className='typing-box-wrapper'>
            <input className='typing-box-input' placeholder="Type something here..."></input>
            <button id="send-message-btn" className='typing-box-icon'><LuSendHorizonal /></button>
            </div>
        </div>
    );
}

export default TypingBox;