import { createContext, useContext, useState, ReactNode } from 'react';
import { mockPosts } from './mockData';

const PostsContext = createContext<{
  posts: typeof mockPosts;
  addPost: (content: string) => void;
}>({ posts: mockPosts, addPost: () => {} });

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (content: string) => {
    setPosts(prev => [{
      id: `${Date.now()}`,
      user: 'Alice',
      handle: '@alice',
      content,
      likes: 0,
      comments: 0,
      time: 'maintenant',
      liked: false,
    }, ...prev]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
