import React from 'react';
import { Avatar, TopNav } from '../components/UI';
import { mockNotifications } from '../mockData';
import { Heart, AtSign, UserPlus } from 'lucide-react';

export const NotificationsScreen = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like': return <Heart size={20} className="text-[#E11D48]" />;
      case 'mention': return <AtSign size={20} className="text-[#2563EB]" />;
      case 'follow': return <UserPlus size={20} className="text-[#059669]" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Notifications" />

      <div className="flex-1 overflow-y-auto">
        <div className="flex border-b border-[#E5E7EB]">
          <div className="flex-1 text-center font-bold text-[#2563EB] border-b-2 border-[#2563EB] py-3">
            All
          </div>
          <div className="flex-1 text-center text-[#6B7280] font-medium py-3 hover:bg-[#F9FAFB]">
            Mentions
          </div>
        </div>

        <div>
          {mockNotifications.map(notification => (
            <div key={notification.id} className={`p-4 border-b border-[#E5E7EB] flex gap-4 ${!notification.read ? 'bg-[#EFF6FF]' : 'bg-white'}`}>
              <div className="pt-1">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <Avatar size="sm" className="mb-2" />
                <div className="text-sm">
                  <span className="font-bold text-[#111827]">{notification.user}</span>{' '}
                  <span className="text-[#374151]">{notification.content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
