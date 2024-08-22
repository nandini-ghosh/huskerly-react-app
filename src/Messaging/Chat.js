import '../index.css';
import './style.css';
import TypingBox from '../Messaging/TypingBox';
import { FaUserCircle } from 'react-icons/fa';
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const URL = "wss://4pol8l45nh.execute-api.us-east-2.amazonaws.com/v1/"


function Chat() {
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const userData = location.state.userData;
    const userAtts = location.state.userAtts;

    const socket = useRef(null);
    const onSocketOpen = useCallback(() => {
        //open

        socket.current?.send(JSON.stringify({
            action: 'joinChannel',
            channel_id : "default",
            user_email : userAtts.name
            }));
        

        
         
    }, []);

    const onSocketClose = useCallback(() => {
        //close
        socket.current?.close();

    }, []);

    const onSocketRecieve = useCallback((event) => {
        console.log("recieved");
        console.log(event.data);
        console.log(event.data.substring(7, 19))
        console.log(event.data.substring(58,event.data.length-3))
        if (event.data.substring(7, 19) === "connectionId") {
            let cleanedData = event.data.substring(58,event.data.length-3);
            setMessages(messages => [...messages, cleanedData.split("\", \"")]);
            return
        }
        if(event.data !== "{\"status\":200}") {
            let cleanedData = event.data.substring(2,event.data.length-2);
            setMessages(messages => [...messages, cleanedData.split("\", \"")]);
        }
        
    }, []);

    const handleNewMessage = (message) => {
        if (socket.current && socket.current.readyState === WebSocket.OPEN) {
            
            const messagePayload = JSON.stringify({
                action: "sendMessage",
                message: message
            });
            socket.current.send(messagePayload);
        }
    }
    
    useEffect(() => {
        if(socket.current?.readyState !== WebSocket.OPEN) {
            socket.current = new WebSocket(URL)

            socket.current.addEventListener('open', onSocketOpen);
            socket.current.addEventListener('close', onSocketClose)
            socket.current.addEventListener('message', onSocketRecieve);
        }
    }, [onSocketOpen, onSocketClose, onSocketRecieve]);
    


    return (
        <div className='chatbox-window-wrapper'>
            <div className='chatbox-window'>
                {messages.length === 0 ? (
                    <div className='message-header'>No messages yet</div>
                ) : (
                    messages.map((message, index) => (
                        ( <div key={index} className='chat-message-wrapper'>
                            <div className='user-profile'><FaUserCircle /></div>
                            <div className='chat-message-text-wrapper'>
                                <div className='message-header'>
                                    <div className='username'>{message[0]}</div>
                                    <div className='timestamp'>00:00</div>
                                </div>
                                <div className='message-text'>
                                    {message[1]}
                                </div>
                                {/* <button id='replies-btn' className='message-replies'>Replies? no</button> */}
                            </div>
                        </div>)
                    ))
                )}
                
            </div>
            <TypingBox onSendMessage={handleNewMessage} />
        </div>
    );
}

export default Chat;