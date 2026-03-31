import { getPosts, getCategories } from '@/lib/api';
import PostList from '@/components/blog/PostList';
import SearchBar from '@/components/blog/SearchBar';
import Link from 'next/link';
import { Suspense } from 'react';
import { cn } from '@/lib/utils';

interface BlogPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { q, category: activeCategory } = await searchParams;
  
  const posts = await getPosts({
    search: q,
    category: activeCategory,
  });

  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Danh sách <span className="text-orange-500">Boss</span></h1>
        <p className="text-lg text-gray-600">Khám phá tất cả các bài viết hay nhất về mèo tại đây.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="grow">
          <SearchBar />
          
          <Suspense fallback={<div>Đang tải bài viết...</div>}>
            <PostList posts={posts} />
          </Suspense>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
              Chuyên mục
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
            </h3>
            <div className="flex flex-wrap lg:flex-column gap-3">
              <Link
                href="/blog"
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                  !activeCategory 
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-100" 
                    : "bg-white text-gray-600 border-gray-100 hover:border-orange-200 hover:text-orange-500"
                )}
              >
                Tất cả
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog?category=${category.slug}`}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                    activeCategory === category.slug
                      ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-100"
                      : "bg-white text-gray-600 border-gray-100 hover:border-orange-200 hover:text-orange-500"
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl text-white shadow-xl shadow-orange-100 relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="text-lg font-bold mb-2">Gửi ảnh Boss</h4>
                 <p className="text-orange-50 mb-4 text-sm">Chia sẻ hình ảnh mèo cưng của bạn để xuất hiện trên blog.</p>
                 <button className="w-full py-2 bg-white text-orange-600 font-extrabold rounded-xl text-sm transition-transform hover:scale-105 active:scale-95">
                   Gửi ngay
                 </button>
               </div>
               {/* Abstract decorative shape */}
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
