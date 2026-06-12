import { Link } from 'react-router';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Avatar, TopNav } from '../components/UI';
import { usePosts } from '../PostsContext';

export const PostItem = ({ post, onClick }: { post: any, onClick?: () => void }) => {
  return (
    <div
      className="p-4 border-b border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors cursor-pointer flex gap-3"
      onClick={onClick}
    >
      <Link to={`/app/user/${post.handle.replace('@', '')}`} onClick={(e) => e.stopPropagation()}>
        <Avatar size="md" />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <Link
            to={`/app/user/${post.handle.replace('@', '')}`}
            className="font-bold text-[#111827] truncate hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {post.user}
          </Link>
          <span className="text-[#6B7280] text-sm truncate">{post.handle}</span>
          <span className="text-[#6B7280] text-sm">·</span>
          <span className="text-[#6B7280] text-sm shrink-0">{post.time}</span>
        </div>
        <p className="text-[#374151] text-sm leading-relaxed mb-3 whitespace-pre-wrap word-break break-words">
          {post.content}
        </p>
        <div className="flex items-center justify-between text-[#6B7280] max-w-xs">
          <button className="flex items-center gap-1.5 hover:text-[#2563EB] transition-colors group" onClick={(e) => e.stopPropagation()}>
            <div className="p-1.5 rounded-full group-hover:bg-[#EFF6FF]"><MessageCircle size={18} /></div>
            <span className="text-xs font-medium">{post.comments > 0 ? post.comments : ''}</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-[#E11D48] transition-colors group" onClick={(e) => e.stopPropagation()}>
            <div className="p-1.5 rounded-full group-hover:bg-[#FFF1F2]">
              <Heart size={18} className={post.liked ? 'fill-[#E11D48] text-[#E11D48]' : ''} />
            </div>
            <span className="text-xs font-medium">{post.likes > 0 ? post.likes : ''}</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-[#2563EB] transition-colors group" onClick={(e) => e.stopPropagation()}>
            <div className="p-1.5 rounded-full group-hover:bg-[#EFF6FF]"><Share size={18} /></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const HomeFeedScreen = () => {
  const { posts } = usePosts();
  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav title="Home" />
      <div className="p-4 border-b border-[#E5E7EB] flex gap-3">
        <Avatar size="md" />
        <Link to="/app/compose" className="flex-1 bg-[#F9FAFB] hover:bg-[#F3F4F6] border border-[#E5E7EB] rounded-full px-4 py-2.5 text-[#6B7280] flex items-center transition-colors">
          What's happening?
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        {posts.map(post => (
          <Link to={`/app/post/${post.id}`} key={post.id} className="block">
            <PostItem post={post} />
          </Link>
        ))}
        <div className="h-10"></div>
      </div>
    </div>
  );
};
