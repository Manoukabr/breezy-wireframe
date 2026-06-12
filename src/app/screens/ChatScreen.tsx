import React, { useState, useRef } from 'react';
import { useParams } from 'react-router';
import { Info, SendHorizontal } from 'lucide-react';
import { Avatar, TopNav } from '../components/UI';
import { mockChats, mockMessages } from '../mockData';

export const ChatScreen = () => {
  const { id } = useParams();
  const chat = mockChats.find(c => c.id === id) || mockChats[0];
  const [messages, setMessages] = useState(mockMessages);
  const [text, setText] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, {
      id: `m${Date.now()}`,
      sender: 'Me',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    }]);
    setText('');
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav
        title={chat.user}
        showBack
        rightElement={
          <button className="p-2 rounded-full hover:bg-[#F3F4F6] text-[#6B7280]">
            <Info size={20} />
          </button>
        }
      />

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center py-6 border-b border-[#E5E7EB] mb-2">
          <Avatar size="lg" className="mb-2" />
          <div className="font-bold text-[#111827] text-lg">{chat.user}</div>
          <div className="text-[#6B7280] text-sm mb-4">{chat.handle}</div>
          <div className="text-sm text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded-full">
            Joined March 2023
          </div>
        </div>

        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
            <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] ${msg.isMe ? 'bg-[#2563EB] text-white rounded-br-sm' : 'bg-[#F3F4F6] text-[#111827] rounded-bl-sm'}`}>
              <p className="text-[15px]">{msg.text}</p>
            </div>
            <span className="text-xs text-[#6B7280] mt-1">{msg.time}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="p-3 border-t border-[#E5E7EB] flex items-center gap-3">
        <div className="flex-1 bg-[#F3F4F6] rounded-full flex items-center px-4 py-1.5">
          <input
            type="text"
            placeholder="Start a message"
            className="w-full bg-transparent border-none text-sm focus:outline-none py-1.5 text-[#111827] placeholder-[#6B7280]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            className={`p-1 flex-shrink-0 ml-2 transition-colors ${text.trim() ? 'text-[#2563EB] hover:text-[#1D4ED8]' : 'text-[#9CA3AF]'}`}
            onClick={sendMessage}
          >
            <SendHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
