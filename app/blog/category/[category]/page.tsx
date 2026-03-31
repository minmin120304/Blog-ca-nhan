import { getPosts, getCategories } from '@/lib/api';
import PostList from '@/components/blog/PostList';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  
  const posts = await getPosts({
    category: categorySlug,
  });

  const categories = await getCategories();
  const activeCategory = categories.find(c => c.slug === categorySlug);

  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Tất cả bài viết
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Chuyên mục: <span className="text-orange-500">{activeCategory?.name || categorySlug}</span>
        </h1>
        <p className="text-lg text-gray-600">
          {activeCategory?.description || `Tuyển tập các bài viết thuộc chủ đề ${activeCategory?.name || categorySlug}.`}
        </p>
      </div>

      <PostList posts={posts} />
    </div>
  );
}
