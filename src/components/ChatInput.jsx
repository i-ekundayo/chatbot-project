import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }
    setIsLoading(true);

    const senderTime = dayjs().valueOf();
    const formattedSenderTime = dayjs(senderTime).format("h:mma");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        time: formattedSenderTime,
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    setInputText("");

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinner} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    const responseTime = dayjs().valueOf();
    const formattedResponseTime = dayjs(responseTime).format("h:mma");

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        time: formattedResponseTime,
        id: crypto.randomUUID(),
      },
    ]);
    setIsLoading(false);
  }

  function sendMessageWithEnter(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
    if (event.key === "Esc" || event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessage() {
    setChatMessages([]);
    // localStorage.setItem("messages", JSON.stringify(chatMessages));
  }

  // setIsLoading(false);

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={sendMessageWithEnter}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={clearMessage} className="clear-button">
        Clear
      </button>
    </div>
  );
}
