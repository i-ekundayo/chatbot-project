import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages') || "[]"));

  useEffect(() => {
    Chatbot.addResponses({
      'Alright, take care': "Take good care of yourself",
      "Goodbye": "You too, Goodbye",
      "I love you": "I love you too"
    });

    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages])


  // const [chatMessages, setChatMessaages] = array;

  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
export default App;