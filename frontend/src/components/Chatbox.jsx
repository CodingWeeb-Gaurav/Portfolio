// src/components/Chatbox.jsx
import { useState, useEffect } from 'react';

export default function Chatbox({ onClose }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/chatbot`);
        const data = await res.json();
        setMessages([{ role: "assistant", content: data.reply }]);
      } catch (err) {
        setMessages([{ role: "assistant", content: "Oops! Couldn't load the intro message." }]);
      }
    };
    fetchIntro();
  }, []);

  return (
    <div className="fixed bottom-24 right-4 bg-white rounded-xl shadow-xl w-80 max-h-[60vh] overflow-y-auto p-4 z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Menhara-Chan🥰</h2>
        <button onClick={onClose} className="text-sm text-red-500">X</button>
      </div>
      <div className="space-y-2 text-sm text-gray-800">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "assistant" ? "bg-gray-100 p-2 rounded" : "bg-blue-100 p-2 rounded"}>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
