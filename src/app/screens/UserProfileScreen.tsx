import { Link } from 'react-router';
import { Settings } from 'lucide-react';
import { Avatar, TopNav } from '../components/UI';
import { PostItem } from './HomeFeedScreen';
import { mockPosts } from '../mockData';

export const UserProfileScreen = () => {
  const userPosts = mockPosts.filter(p => p.user === "Alice");

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav
        title="Profile"
        showBack
        rightElement={
          <Link to="/app/settings" className="p-2 rounded-full hover:bg-[#F3F4F6] text-[#6B7280] block">
            <Settings size={20} />
          </Link>
        }
      />

      <div className="flex-1 overflow-y-auto">
        <div className="h-32 bg-[#DBEAFE] w-full" />

        <div className="px-4 pb-4">
          <div className="flex items-end -mt-10 mb-4">
            <div className="bg-white p-1 rounded-full">
              <Avatar size="xl" />
            </div>
          </div>

          <div className="mb-3">
            <h2 className="text-xl font-bold text-[#111827] leading-tight">Alice</h2>
            <div className="text-[#6B7280]">@alice</div>
          </div>

          <p className="text-[#374151] text-sm mb-4">
            UX Designer and front-end developer. I love creating simple, wireframe-style mockups. Exploring the world of low-fidelity design.
          </p>

          <div className="flex gap-4 text-sm">
            <Link to="/app/profile/network" className="hover:underline">
              <span className="font-bold text-[#111827]">124</span> <span className="text-[#6B7280]">Following</span>
            </Link>
            <Link to="/app/profile/network" className="hover:underline">
              <span className="font-bold text-[#111827]">4,092</span> <span className="text-[#6B7280]">Followers</span>
            </Link>
          </div>
        </div>

        <div className="flex border-b border-[#E5E7EB]">
          <div className="flex-1 text-center font-bold text-[#2563EB] border-b-2 border-[#2563EB] py-3">
            Posts
          </div>
        </div>

        <div>
          {userPosts.map(post => (
            <Link to={`/app/post/${post.id}`} key={post.id} className="block">
              <PostItem post={post} />
            </Link>
          ))}
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};
