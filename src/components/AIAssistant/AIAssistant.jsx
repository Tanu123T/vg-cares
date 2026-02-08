import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';
import { HelpCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: "Hello! I'm your VG CARES AI assistant. How can I help you with your medical inquiries today?" 
    }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const toggleAssistant = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI logic
    setTimeout(() => {
      let botResponse = "I can help you find doctors, hospitals, or book appointments. What are you looking for?";
      
      const input = userMsg.toLowerCase();
      if(input.includes("doctor")) botResponse = "We have top-rated specialists available. You can view them in the 'Doctor' section of our menu.";
      if(input.includes("hospital")) botResponse = "I can locate the nearest VG Cares partnered hospitals for you. Should I proceed?";
      
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="ai-wrapper">
      {/* Floating Button */}
      <button 
        className={`ai-help-button ${isOpen ? 'active' : ''}`} 
        onClick={toggleAssistant}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X size={28} /> : <HelpCircle size={28} />}
        <span className="help-tooltip">Need Help?</span>
      </button>

      {/* Chat Window */}
      <div className={`ai-assistant-window ${isOpen ? 'open' : ''}`}>
        <div className="ai-header">
          <div className="ai-title">
            <div className="bot-avatar"><Bot size={18} /></div>
            <div className="title-text">
              <span>VG CARES</span>
              <small>Always Online</small>
            </div>
          </div>
          <button className="ai-close-btn" onClick={toggleAssistant}><X size={20} /></button>
        </div>

        <div className="ai-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.type}`}>
              <div className="msg-icon">
                {msg.type === 'bot' ? <Bot size={14} /> : <User size={14} />}
              </div>
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message-row bot">
              <div className="msg-icon"><Bot size={14} /></div>
              <div className="message-content typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-input-area">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage} disabled={isLoading}>
            {isLoading ? <Loader2 className="spinner" size={18} /> : <Send size={18} />}
          </button>
        </div>
        
        <div className="ai-footer">
          Powered by VG Cares Global
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;