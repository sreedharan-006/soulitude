import React, { useState, useEffect, useRef } from 'react';
import { ChatIcon } from './Icons';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm your Soulitude companion. How are you feeling today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: inputText,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputText('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateResponse(newUserMessage.text);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot'
            }]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('sad') || lowerInput.includes('depressed') || lowerInput.includes('unhappy')) {
            return "I'm sorry to hear that you're feeling down. It takes courage to acknowledge those feelings. Would you like to talk about what's making you feel this way?";
        }
        if (lowerInput.includes('anxious') || lowerInput.includes('worried') || lowerInput.includes('stress')) {
            return "It sounds like you're carrying a lot of weight right now. Have you tried taking a moment to focus on your breathing? We can try a quick exercise together if you like.";
        }
        if (lowerInput.includes('lonely') || lowerInput.includes('alone')) {
            return "Loneliness can be really tough. Please remember that you're not truly alone, even if it feels that way. I'm here to listen.";
        }
        if (lowerInput.includes('happy') || lowerInput.includes('good') || lowerInput.includes('great')) {
            return "That's wonderful to hear! I'm glad you're feeling good. What's been the highlight of your day?";
        }
        if (lowerInput.includes('thank')) {
            return "You're very welcome. I'm here whenever you need to talk.";
        }

        return "I hear you. Thank you for sharing that with me. How else can I support you today?";
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="icon-wrapper"><ChatIcon /></div>
                <h2>AI Compassion Companion</h2>
            </div>

            <div className="messages-list">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-bubble">
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="message bot">
                        <div className="message-bubble typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="chat-input-form">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit" disabled={!inputText.trim()}>Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
