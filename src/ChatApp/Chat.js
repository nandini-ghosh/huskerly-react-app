import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect, useState } from "react";

import "./style.css";

function Chat() {
  const WS_URL = "wss://4pol8l45nh.execute-api.us-east-2.amazonaws.com/v1/";
  const [chatMessage, setChatMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    }
  );

  useEffect(() => {
    if (
      typeof lastJsonMessage === "string" ||
      lastJsonMessage instanceof String
    )
      setChatLog([...chatLog, lastJsonMessage]);
  }, [lastJsonMessage]);

  return (
    <div className="chat-wrapper">
      <div className="chat-log">
        <ul>
          {chatLog.map((msg, i) => {
            return <li key={i}>{msg}</li>;
          })}
        </ul>
      </div>
      <div className="chat-input">
        <input
          onChange={(e) => {
            setChatMessage(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            sendJsonMessage({
              action: "sendMessage",
              message: chatMessage,
            });
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
