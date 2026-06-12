import { useParams } from 'react-router';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';
import { Avatar, TopNav, Input, Button } from '../components/UI';
import { mockPosts, mockComments } from '../mockData';

export const PostDetailsScreen = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id === id) || mockPosts[0];

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Post" showBack />

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Avatar size="md" />
              <div>
                <div className="font-bold text-[#111827]">{post.user}</div>
                <div className="text-[#6B7280] text-sm">{post.handle}</div>
              </div>
            </div>
            <button className="text-[#6B7280] hover:bg-[#F3F4F6] p-2 rounded-full">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <p className="text-[#111827] text-xl leading-relaxed mb-4 word-break break-words">
            {post.content}
          </p>

          <div className="text-[#6B7280] text-sm mb-4 flex gap-1">
            <span>{post.time}</span>
            <span>·</span>
            <span className="font-bold text-[#2563EB]">Breezy Web</span>
          </div>

          <div className="flex items-center gap-6 py-4 border-t border-b border-[#E5E7EB] mb-2 text-sm text-[#6B7280]">
            <div><span className="font-bold text-[#111827]">{post.likes}</span> Likes</div>
            <div><span className="font-bold text-[#111827]">{post.comments}</span> Comments</div>
          </div>

          <div className="flex items-center justify-around py-2 text-[#6B7280]">
            <button className="flex items-center gap-2 hover:text-[#2563EB] transition-colors p-2 rounded-full hover:bg-[#EFF6FF]">
              <MessageCircle size={22} />
            </button>
            <button className="flex items-center gap-2 hover:text-[#E11D48] transition-colors p-2 rounded-full hover:bg-[#FFF1F2]">
              <Heart size={22} className={post.liked ? 'fill-[#E11D48] text-[#E11D48]' : ''} />
            </button>
            <button className="flex items-center gap-2 hover:text-[#2563EB] transition-colors p-2 rounded-full hover:bg-[#EFF6FF]">
              <Share size={22} />
            </button>
          </div>
        </div>

        <div className="p-4 border-b border-[#E5E7EB] flex gap-3 items-center">
          <Avatar size="sm" />
          <div className="flex-1">
            <Input placeholder="Post your reply" className="py-2 text-sm bg-[#F9FAFB] rounded-full border-[#E5E7EB]" />
          </div>
          <Button className="py-1.5 px-4 text-sm h-9">Reply</Button>
        </div>

        <div className="pb-10">
          {mockComments.map(comment => (
            <div key={comment.id}>
              <div className="p-4 border-b border-[#E5E7EB] flex gap-3 hover:bg-[#F9FAFB] transition-colors">
                <Avatar size="md" />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-[#111827]">{comment.user}</span>
                    <span className="text-[#6B7280] text-sm">{comment.handle}</span>
                    <span className="text-[#6B7280] text-sm">·</span>
                    <span className="text-[#6B7280] text-sm">{comment.time}</span>
                  </div>
                  <p className="text-[#374151] text-sm leading-relaxed mb-2">{comment.content}</p>
                  <div className="flex items-center gap-6 text-[#6B7280]">
                    <button className="hover:text-[#2563EB] flex items-center gap-1"><MessageCircle size={14} /></button>
                    <button className="hover:text-[#E11D48] flex items-center gap-1"><Heart size={14} /></button>
                  </div>
                </div>
              </div>

              {comment.id === "101" && (
                <div className="pl-14 pr-4 py-3 border-b border-[#E5E7EB] flex gap-3 bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors">
                  <Avatar size="sm" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold text-[#111827]">Alice</span>
                      <span className="text-[#6B7280] text-sm">@alice</span>
                      <span className="text-[#6B7280] text-sm">·</span>
                      <span className="text-[#6B7280] text-sm">45m</span>
                    </div>
                    <p className="text-[#374151] text-sm leading-relaxed mb-2">Thanks Dave! Let me know if you see anything to tweak.</p>
                    <div className="flex items-center gap-6 text-[#6B7280]">
                      <button className="hover:text-[#2563EB] flex items-center gap-1"><MessageCircle size={14} /></button>
                      <button className="hover:text-[#E11D48] flex items-center gap-1"><Heart size={14} /></button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
