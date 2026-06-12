import { RouterProvider } from 'react-router';
import { router } from './routes';
import { PostsProvider } from './PostsContext';

export default function App() {
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
}
