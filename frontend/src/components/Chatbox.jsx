// src/components/Chatbox.jsx
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Chatbox({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [gifState, setGifState] = useState("main"); // main | thinking | answering
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/chatbot`);
        const data = await res.json();
        setMessages([{ role: "assistant", content: data.reply }]);
      } catch {
        setMessages([{ role: "assistant", content: "Oops! Couldn't load intro." }]);
      }
    };
    fetchIntro();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setGifState("thinking");

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
      setGifState("answering");
      setTimeout(() => setGifState("main"), 5000);
    } catch {
      setMessages([...updatedMessages, { role: "assistant", content: "Error getting response." }]);
      setGifState("main");
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <div className="relative w-80 max-h-[70vh] bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow-xl flex flex-col border border-pink-300">
        
        {/* ✅ Floating GIF inside chatbox container */}
        <img
          src={`/GIFs/${gifState}.gif`}
          alt="chatbot"
          className="w-20 h-20 absolute -top-9 -left-2 object-contain z-50 pointer-events-none"
          style={{ animation: 'none' }}
        />

        <div className="flex items-center justify-between p-2 border-b border-gray-300">
          <h2 className="font-semibold text-purple-700"> {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Menhara-Chan 🥰</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {messages.map((msg, i) => (
            <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                msg.role === "user"
                    ? "ml-auto bg-blue-200 text-right text-blue-900"
                    : "mr-auto bg-white text-left text-gray-800"
                }`}
            >
                {msg.role === "assistant" ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                msg.content
                )}
            </div>
            ))}

          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t border-gray-300">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question..."
            className="flex-1 px-3 py-2 rounded-bl-xl text-sm outline-none bg-white"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-pink-400 text-white rounded-br-xl hover:bg-pink-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
