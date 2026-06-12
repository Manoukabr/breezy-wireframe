import { useState } from 'react';
import { Search } from 'lucide-react';
import { Avatar, Button, TopNav } from '../components/UI';
import { mockUsers } from '../mockData';

export const NetworkScreen = () => {
  const [activeTab, setActiveTab] = useState<'followers' | 'following'>('followers');
  const [users, setUsers] = useState(mockUsers);

  const toggleFollow = (id: string) => {
    setUsers(users.map(u => u.id === id ? { ...u, following: !u.following } : u));
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Alice" showBack />
      
      <div className="flex border-b border-gray-200">
        <button 
          className={`flex-1 text-center font-bold py-3 ${activeTab === 'followers' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('followers')}
        >
          Followers
        </button>
        <button 
          className={`flex-1 text-center font-bold py-3 ${activeTab === 'following' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
          onClick={() => setActiveTab('following')}
        >
          Following
        </button>
      </div>

      <div className="p-3 border-b border-gray-100">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search users" 
            className="w-full bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-0 outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Avatar size="md" />
              <div>
                <div className="font-bold text-gray-900">{user.name}</div>
                <div className="text-gray-500 text-sm">{user.handle}</div>
              </div>
            </div>
            <Button 
              variant={user.following ? "outline" : "primary"}
              className="py-1.5 px-4 text-sm h-8"
              onClick={() => toggleFollow(user.id)}
            >
              {user.following ? 'Following' : 'Follow'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
