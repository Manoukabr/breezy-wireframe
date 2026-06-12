import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { MailPlus, Settings, X, Check } from 'lucide-react';
import { Avatar, TopNav } from '../components/UI';
import { mockChats, mockUserProfiles } from '../mockData';

const NewMessageModal = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<typeof mockUserProfiles[0] | null>(null);

  const handleNext = () => {
    if (!selected) return;
    const existing = mockChats.find(c => c.handle === selected.handle);
    navigate(existing ? `/app/messages/${existing.id}` : `/app/messages/c1`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
      <div className="bg-white w-full max-w-sm mt-16 rounded-2xl shadow-xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#F3F4F6]">
            <X size={20} className="text-[#111827]" />
          </button>
          <span className="font-bold text-[#111827]">Nouveau message</span>
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`text-sm font-bold px-3 py-1 rounded-full transition-colors ${
              selected ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed'
            }`}
          >
            Suivant
          </button>
        </div>

        <div className="overflow-y-auto max-h-72">
          {mockUserProfiles.map(user => (
            <button
              key={user.id}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F9FAFB] transition-colors"
              onClick={() => setSelected(user)}
            >
              <Avatar size="md" />
              <div className="flex-1 text-left">
                <div className="font-bold text-[#111827] text-sm">{user.name}</div>
                <div className="text-[#6B7280] text-xs">{user.handle}</div>
              </div>
              {selected?.id === user.id && <Check size={18} className="text-[#2563EB]" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MessagesScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav
        title="Messages"
        rightElement={
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-[#F3F4F6] text-[#6B7280]"><Settings size={20} /></button>
            <button className="p-2 rounded-full hover:bg-[#F3F4F6] text-[#2563EB]" onClick={() => setShowModal(true)}><MailPlus size={20} /></button>
          </div>
        }
      />

      {showModal && <NewMessageModal onClose={() => setShowModal(false)} />}

      <div className="flex-1 overflow-y-auto">
        <div>
          {mockChats.map(chat => (
            <Link to={`/app/messages/${chat.id}`} key={chat.id} className="block hover:bg-[#F9FAFB] transition-colors">
              <div className="p-4 border-b border-[#E5E7EB] flex gap-3 items-center">
                <Avatar size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="font-bold text-[#111827] truncate">{chat.user}</span>
                      <span className="text-[#6B7280] text-sm truncate">{chat.handle}</span>
                    </div>
                    <span className="text-[#6B7280] text-xs flex-shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'font-bold text-[#111827]' : 'text-[#6B7280]'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <span className="w-5 h-5 bg-[#2563EB] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                    {chat.unread}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
