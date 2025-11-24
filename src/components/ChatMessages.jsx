import { useAutoScroll } from "./useAutoScroll";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  if (chatMessages.length === 0) {
    return (
      <div className="welcome-text">
        <p>
          Welcome to chatbot project! Send a message using the textbox below.
        </p>
      </div>
    );
  }
  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;