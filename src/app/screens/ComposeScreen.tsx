import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Avatar, Button, Textarea, TopNav } from '../components/UI';
import { usePosts } from '../PostsContext';

export const ComposeScreen = () => {
  const navigate = useNavigate();
  const { addPost } = usePosts();
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;
    addPost(content.trim());
    navigate('/app/home');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <TopNav 
        title="New Post" 
        showBack 
        rightElement={
          <Button variant="primary" className="py-1 px-4 text-sm h-8" onClick={handlePost} disabled={!content.trim()}>
            Post
          </Button>
        } 
      />
      
      <div className="flex-1 p-4 flex gap-3">
        <Avatar size="md" />
        <div className="flex-1">
          <Textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-32 border-none bg-transparent p-0 text-lg text-[#111827] placeholder-[#6B7280] focus:ring-0 resize-none shadow-none"
            autoFocus
          />
          <div className={`text-xs mt-2 text-right ${content.length > 260 ? 'text-[#DC2626]' : 'text-[#6B7280]'}`}>
            {content.length}/280
          </div>
        </div>
      </div>
    </div>
  );
};
