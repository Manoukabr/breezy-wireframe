import React, { useState } from 'react';
import { ShieldAlert, UserPlus, Ban } from 'lucide-react';
import { TopNav, Avatar, Button } from '../components/UI';

export const AdminDashboardScreen = () => {
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Alice', handle: '@alice', status: 'active' },
    { id: 'u2', name: 'Bob', handle: '@bob', status: 'active' },
    { id: 'u3', name: 'Charlie', handle: '@charlie', status: 'active' },
    { id: 'u4', name: 'Diana', handle: '@diana', status: 'active' },
    { id: 'u5', name: 'Frank', handle: '@frank', status: 'banned' },
    { id: 'u6', name: 'Grace', handle: '@grace', status: 'active' },
  ]);

  const handleBanUser = (userId: string) => {
    setUsers(users.map(u =>
      u.id === userId ? { ...u, status: u.status === 'banned' ? 'active' : 'banned' } : u
    ));
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Moderator Dashboard" showBack />

      <div className="flex-1 overflow-y-auto bg-[#F9FAFB]">
        <div className="p-4 bg-white border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert size={24} className="text-[#2563EB]" />
            <h1 className="text-xl font-bold text-[#111827]">User Management</h1>
          </div>
          <p className="text-[#6B7280] text-sm">Manage user accounts and permissions</p>
        </div>

        <div className="p-4 bg-white border-b border-[#E5E7EB]">
          <Button
            onClick={() => alert('Create User form would open here')}
            className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            Create User
          </Button>
        </div>

        <div className="bg-white border-y border-[#E5E7EB] mt-2">
          <div className="px-4 py-3 border-b border-[#E5E7EB] bg-[#F9FAFB]">
            <h2 className="text-sm font-bold text-[#111827]">All Users</h2>
          </div>

          {users.map(user => (
            <div key={user.id} className="px-4 py-3 border-b border-[#E5E7EB] flex items-center justify-between hover:bg-[#F9FAFB]">
              <div className="flex items-center gap-3 flex-1">
                <Avatar size="md" />
                <div className="flex-1">
                  <div className="font-bold text-[#111827]">{user.name}</div>
                  <div className="text-sm text-[#6B7280]">{user.handle}</div>
                </div>
                {user.status === 'banned' && (
                  <span className="px-2 py-1 bg-[#FEF2F2] text-[#DC2626] text-xs font-bold rounded">
                    BANNED
                  </span>
                )}
              </div>
              <button
                onClick={() => handleBanUser(user.id)}
                className={`ml-3 px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                  user.status === 'banned'
                    ? 'bg-[#059669] text-white hover:bg-[#047857]'
                    : 'bg-[#DC2626] text-white hover:bg-[#B91C1C]'
                }`}
              >
                <Ban size={16} className="inline mr-1" />
                {user.status === 'banned' ? 'Unban' : 'Ban'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
