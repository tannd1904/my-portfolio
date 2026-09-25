'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Phone, 
  Loader2,
  ChevronDown
} from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import { profileData } from '@/data/portfolio';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isForwardConfirmation?: boolean;
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [isLeavingMessage, setIsLeavingMessage] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Xin chào! 👋 I'm Tan's automated assistant. You can ask me anything about Tan's architecture background (Java 11/17/21/23, Spring Boot 3, SAP Commerce microservices), or leave a message below and I will forward it directly to Tan!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const addBotMessage = (text: string, isForwardConfirmation = false) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'bot',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isForwardConfirmation,
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    // Add user message to thread
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    setInputMessage('');

    // Check if this is a lead message to forward
    const lower = text.toLowerCase();

    // 1. If user asks for direct contact or leaves an opportunity
    if (
      lower.includes('contact') || 
      lower.includes('hire') || 
      lower.includes('job') || 
      lower.includes('email') || 
      lower.includes('phone') ||
      lower.includes('liên hệ') ||
      lower.includes('inquiry')
    ) {
      setIsLeavingMessage(true);
      addBotMessage(
        `You can reach Tan directly at ${profileData.email} or call ${profileData.phone}. If you'd like to leave a note right here, fill in your info below and I'll forward it directly to Tan!`
      );
      return;
    }

    // 2. Questions about skills & stack
    if (lower.includes('skill') || lower.includes('stack') || lower.includes('java') || lower.includes('spring')) {
      addBotMessage(
        `Tan specializes in enterprise backend architecture: Java (11 / 17 / 21 / 23), Spring Boot 3, Spring Security 6, Microservices, Domain-Driven Design, RESTful APIs, PostgreSQL, MSSQL, Oracle, Redis, Docker, and Jenkins CI/CD.`
      );
      return;
    }

    // 3. Questions about Toyota or SAP Commerce
    if (lower.includes('toyota') || lower.includes('sap') || lower.includes('hybris') || lower.includes('microservice')) {
      addBotMessage(
        `At SAI Digital, Tan works on the Toyota Motor Philippines platform modernization—decoupling functional modules from the SAP Commerce / Hybris core into autonomous microservices with asynchronous event flows and distributed data consistency.`
      );
      return;
    }

    // 4. Questions about Bosch or Softbank
    if (lower.includes('bosch')) {
      addBotMessage(
        `At Bosch Global Software Technologies, Tan executed modernization from Java 11 → 17, Spring Boot 2 → 3, integrated Azure AD SSO, automated Jenkins CI/CD pipelines, and maintained SonarQube code smells < 5% with > 80% test coverage.`
      );
      return;
    }

    if (lower.includes('softbank')) {
      addBotMessage(
        `At IT Services Japan Group, Tan developed payment transaction processing logic for Softbank Payment Service, optimized 200+ TypeScript/Angular screens, and mentored junior engineers.`
      );
      return;
    }

    // Default conversational response with prompt to forward message
    addBotMessage(
      `Thanks for your message! Would you like me to forward this note directly to Tan so he can reply to you? Click "Leave Note for Tan" below or drop your email!`
    );
  };

  const handleForwardInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() && !senderContact.trim()) return;

    setIsSubmitting(true);
    const payloadMessage = inputMessage.trim() || 'Visitor requested contact from portfolio chatbot.';

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: senderName || 'Recruiter / Client',
          contact: senderContact || 'Contact not provided',
          message: payloadMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'user',
          text: `[Inquiry forwarded]: ${payloadMessage} (Contact: ${senderContact || 'tannd1904@gmail.com'})`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);

      addBotMessage(
        `✅ Message received! I have forwarded your inquiry directly to Tan. Tan will review it and get back to you at ${senderContact || 'your email'} as soon as possible!`,
        true
      );

      setInputMessage('');
      setSenderName('');
      setSenderContact('');
      setIsLeavingMessage(false);
    } catch (err) {
      addBotMessage(
        `Message saved! You can also email Tan directly at ${profileData.email} or call ${profileData.phone}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-20 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close assistant chat' : 'Open assistant chat'}
          title="Chat with Tan's Assistant / Leave message"
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#121419]/90 hover:bg-[#1a1d24] text-foreground border border-white/[0.1] hover:border-accent-cyan/60 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald"></span>
          </span>

          <MessageSquare className="w-4 h-4 text-accent-cyan" />
          <span className="text-xs font-mono font-medium hidden sm:inline-block">
            {isOpen ? 'Close Chat' : 'Chat / Leave Message'}
          </span>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Tan's AI Assistant"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] max-h-[580px] h-[520px] rounded-2xl bg-[#0c0d11] border border-white/[0.12] shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-fadeIn font-sans"
        >
          {/* Header */}
          <div className="p-4 bg-[#14161c] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                src={profileData.avatarUrl}
                alt={profileData.name}
                size="sm"
                enableZoom={false}
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">
                    Tan Nguyen Duy
                  </span>
                  <span className="text-[10px] font-mono text-accent-emerald bg-accent-emerald/10 px-1.5 py-0.2 rounded">
                    ONLINE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-foreground-muted">
                  Assistant & Instant Inquiry Forwarder
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-foreground-muted hover:text-foreground hover:bg-white/[0.06] transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-accent-cyan" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent-cyan text-black font-medium rounded-tr-none'
                      : msg.isForwardConfirmation
                      ? 'bg-accent-emerald/15 border border-accent-emerald/30 text-foreground rounded-tl-none font-medium'
                      : 'bg-[#15171d] border border-white/[0.06] text-foreground-secondary rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-black/60' : 'text-foreground-muted'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="px-3 py-2 bg-[#101116] border-t border-white/[0.04] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
            <button
              onClick={() => handleSendMessage('Tell me about your Java & Microservices skills')}
              className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-foreground-muted hover:text-accent-cyan shrink-0 transition-colors"
            >
              ⚡ Tech Stack
            </button>
            <button
              onClick={() => handleSendMessage('Tell me about the Toyota project')}
              className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-foreground-muted hover:text-accent-cyan shrink-0 transition-colors"
            >
              🚗 Toyota Project
            </button>
            <button
              onClick={() => setIsLeavingMessage(!isLeavingMessage)}
              className="px-2.5 py-1 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan shrink-0 transition-colors"
            >
              ✉️ Forward Message to Tan
            </button>
          </div>

          {/* Interactive Form: Either Simple Chat or Full Forwarding Form */}
          {isLeavingMessage ? (
            <form onSubmit={handleForwardInquiry} className="p-3 bg-[#13151b] border-t border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-accent-cyan pb-1">
                <span>FORWARD INQUIRY DIRECT TO TAN:</span>
                <button
                  type="button"
                  onClick={() => setIsLeavingMessage(false)}
                  className="text-foreground-muted hover:text-foreground text-[10px]"
                >
                  Switch to quick chat
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0a0d] border border-white/[0.08] text-foreground placeholder:text-foreground-muted/60 text-xs focus:outline-none focus:border-accent-cyan"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Email or Phone *"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0a0d] border border-white/[0.08] text-foreground placeholder:text-foreground-muted/60 text-xs focus:outline-none focus:border-accent-cyan"
                />
              </div>

              <textarea
                required
                rows={2}
                placeholder="What would you like to discuss or ask Tan?..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0a0d] border border-white/[0.08] text-foreground placeholder:text-foreground-muted/60 text-xs focus:outline-none focus:border-accent-cyan resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-accent-cyan hover:bg-[#1ef2ff] text-black font-semibold text-xs font-mono transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Forwarding to Tan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send & Forward to Tan</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-3 bg-[#13151b] border-t border-white/[0.08] flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask a question or type a message..."
                className="flex-1 px-3 py-2 rounded-xl bg-[#0a0a0d] border border-white/[0.08] text-foreground placeholder:text-foreground-muted/50 text-xs focus:outline-none focus:border-accent-cyan"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                aria-label="Send message"
                className="p-2 rounded-xl bg-accent-cyan hover:bg-[#1ef2ff] text-black disabled:opacity-40 transition-all focus:outline-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
