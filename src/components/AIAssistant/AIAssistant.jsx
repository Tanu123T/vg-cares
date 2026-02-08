import React, { useState } from 'react';
import './AIAssistant.css';
import { HelpCircle, X, Send, Bot, User } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hello! I\'m your VG CARES AI assistant. How can I help you today? I can provide accurate information about medical services, doctors, hospitals, and health guidance.' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const AI_API_URL = '/api/ai/chat';

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage = { type: 'user', text: inputValue };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await generateAIResponse(userMessage.text, nextMessages);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('AI Error:', error);
      const errorMessage = {
        type: 'bot',
        text: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment or contact our support team for immediate assistance.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = async (userInput, conversationHistory) => {
    try {
      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInput,
          history: (conversationHistory || []).slice(-12),
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data?.reply;

      if (typeof aiResponse !== 'string' || aiResponse.trim() === '') {
        throw new Error('Empty AI reply');
      }

      return {
        type: 'bot',
        text: aiResponse.trim(),
      };
    } catch (_e) {
      return generateFallbackResponse(userInput);
    }
  };

  const generateFallbackResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Enhanced pattern matching for better accuracy
    const patterns = [
      {
        keywords: ['doctor', 'physician', 'specialist', 'medical expert'],
        response: 'I can help you find qualified doctors! Our platform has specialists across various fields including cardiology, neurology, pediatrics, and more. You can browse our doctors directory or use the medical map to find healthcare providers near you. What specific medical specialty are you looking for?'
      },
      {
        keywords: ['hospital', 'emergency', 'urgent care', 'medical center'],
        response: 'For emergency services, please call your local emergency number immediately. For non-emergency hospital information, our medical map can help you find the nearest hospitals with available services, emergency rooms, and specialist care. Are you looking for a specific type of hospital?'
      },
      {
        keywords: ['appointment', 'booking', 'schedule', 'consultation'],
        response: 'Appointment booking is available through our platform. You can schedule consultations with doctors directly from their profiles, check availability, and set reminders. Many doctors offer both in-person and telemedicine appointments. Would you like help finding a specific doctor or specialty?'
      },
      {
        keywords: ['medicine', 'pharmacy', 'prescription', 'medication'],
        response: 'Our medical map includes nearby pharmacies where you can find medications and prescription services. Many also offer delivery and 24-hour services. I can help you locate pharmacies and check if they have your specific medications in stock. What medication do you need information about?'
      },
      {
        keywords: ['symptom', 'feeling sick', 'pain', 'health concern'],
        response: 'I understand you have health concerns. While I can provide general information, please consult with a qualified healthcare provider for medical advice. Our platform connects you with experienced medical professionals who can properly assess your symptoms. Would you like help finding a doctor for your specific concerns?'
      },
      {
        keywords: ['cost', 'price', 'insurance', 'payment', 'afford'],
        response: 'Costs vary by provider, service, and location. Many doctors accept various insurance plans including Medicare, Medicaid, and private insurance. You can check individual doctor profiles for pricing information, accepted insurance providers, and payment options. What specific cost information do you need?'
      },
      {
        keywords: ['test', 'lab', 'diagnosis', 'blood test'],
        response: 'Diagnostic testing is available through our partnered labs and medical centers. We can help you find facilities for blood tests, imaging, and other diagnostic services. Many require doctor referrals. What type of test are you looking for?'
      },
      {
        keywords: ['mental health', 'therapy', 'psychologist', 'counselor'],
        response: 'Mental health support is crucial for overall wellness. Our platform includes mental health professionals including therapists, psychologists, and counselors. Many offer both in-person and virtual sessions. Would you like help finding mental health services in your area?'
      }
    ];

    // Find matching pattern
    for (const pattern of patterns) {
      if (pattern.keywords.some(keyword => input.includes(keyword))) {
        return {
          type: 'bot',
          text: pattern.response
        };
      }
    }

    // Default response
    return {
      type: 'bot',
      text: 'Thank you for your question! I\'m here to help with information about our medical services, finding doctors, locating hospitals, and general health guidance. Could you please provide more details about what you need assistance with? I can help with doctors, hospitals, appointments, medications, and more.'
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Help Button */}
      <button 
        className="ai-help-button" 
        onClick={toggleAssistant}
        aria-label="AI Assistant Help"
      >
        <HelpCircle size={24} />
        <span className="help-tooltip">AI Assistant</span>
      </button>

      {/* AI Assistant Window */}
      <div className={`ai-assistant-window ${isOpen ? 'open' : ''}`}>
        <div className="ai-header">
          <div className="ai-title">
            <Bot size={20} />
            <span>VG CARES Assistant</span>
          </div>
          <button className="ai-close-button" onClick={toggleAssistant}>
            <X size={18} />
          </button>
        </div>

        <div className="ai-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-icon">
                {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="message-content">{message.text}</div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot">
              <div className="message-icon">
                <Bot size={16} />
              </div>
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="ai-input-area">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about medical services..."
            className="ai-input"
            disabled={isLoading}
          />
          <button onClick={sendMessage} className="ai-send-button" disabled={isLoading}>
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>

        <div className="ai-footer">
          <small>
            Powered by VG CARES AI • Not a substitute for professional medical advice
          </small>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
