import { useState, useRef } from "react";
import {FaComments} from "react-icons/fa"
import "./Chatbot.css"

function Chatbot() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [open, setOpen] = useState(false)

    const toggleChat = () => setOpen(!open)

    const sendMessage = async() => {
        if(!input.trim()) return


        const userMessage = {sender: "user", text: input}
        setMessages((prev) => [...prev, userMessage])

        try {
            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: input}),
            })

            const data = await response.json()
            const botMessage = {sender: "bot", text: data.reply}
            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            console.log(error)
        }    
    }

return (
    <div className="chat-container">
        <button onClick={toggleChat} className="chatBtn">
            <FaComments size={20} />
        </button>
        {open && (
            <div className="chat-window">
            <div className="chatbot-messages">
                {messages.map((msg, i) => (
                    <div key={i} className={`chatbot-message ${msg.sender}`}>
                        {msg.sender === "bot" ? `Bot: ${msg.text}` : msg.text}
                  </div>
                ))}
            </div>    
            
            <div className="chatbot-input-container"> 
                <input className="chatbot-input" value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask a question..."
            />
            <button className="send-btn"onClick={sendMessage}>Send</button>    
        </div>
    </div>
    )} 
  </div>
) 
}

export default Chatbot;