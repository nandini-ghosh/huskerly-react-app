import '../index.css';
import './style.css';
import TypingBox from '../Messaging/TypingBox';
import { FaUserCircle } from 'react-icons/fa';

function Chat() {
    return (
        <div className='chatbox-window-wrapper'>
            <div className='chatbox-window'>
                {/* Chat messages populate here */}
                <div className='chat-message-wrapper'>
                    <div className='user-profile'><FaUserCircle /></div>
                    <div className='chat-message-text-wrapper'>
                        <div className='message-header'>
                            <div className='username'>Member Name</div>
                            <div className='timestamp'>00:00</div>
                        </div>
                        <div className='message-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod augue a risus congue facilisis. Nam ultrices leo vitae metus pharetra laoreet. Nunc quis ornare metus. Etiam nec lacinia dui.
                        </div>

                        <button id='replies-btn' className='message-replies'>10 Replies</button>
                    </div>
                </div>
            </div>
            <TypingBox />
        </div>
    );
}

export default Chat;