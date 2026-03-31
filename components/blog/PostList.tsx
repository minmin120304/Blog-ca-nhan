import { Post } from '@/types';
import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
  emptyMessage?: string;
  gridCols?: number;
}

export default async function PostList({ 
  posts, 
  emptyMessage = "Chưa có bài viết nào trong mục này.", 
  gridCols = 3 
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-8 bg-white border rounded-2xl text-center shadow-sm">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25h2.24z" />
          </svg>
        </div>
        <p className="text-xl font-bold text-gray-900 mb-2">{emptyMessage}</p>
        <p className="text-gray-500">Boss đang bận đi bắt chuột rùi, hãy quay lại sau nhé!</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-8`}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
