import { getPostBySlug, getAllPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PostContent from '@/components/blog/PostContent';
import { Calendar, Clock, User, ChevronLeft, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return {};

  return {
    title: `${post.title} | Mèo Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
      {/* Blog Content */}
      <div className="grow max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 mb-8 text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Quay lại danh sách
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-500 mb-4 uppercase tracking-widest bg-orange-50 inline-flex px-3 py-1 rounded-full">
            {post.category.name}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-2 font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              {post.author.name}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), 'dd MMMM, yyyy', { locale: vi })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime} phút đọc
            </div>
          </div>
        </header>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover transition-transform duration-[30s] hover:scale-110"
            priority
          />
        </div>

        <PostContent content={post.content} />

        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm font-bold text-gray-600 cursor-pointer italic">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-2xl hover:border-orange-500 hover:text-orange-500 transition-all font-bold shadow-sm">
                <Share2 className="w-5 h-5" />
                <span>Chia sẻ</span>
             </button>
             <button className="p-3 bg-white border border-gray-100 rounded-2xl hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm">
                <Bookmark className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar for Author & Related */}
      <aside className="w-full lg:w-80 shrink-0">
        <div className="sticky top-24 space-y-12">
          {/* Author Card */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Tác giả</h3>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-3xl overflow-hidden mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2">{post.author.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed italic mb-4">"{post.author.bio}"</p>
                <div className="w-12 h-1 bg-orange-500 rounded-full mb-6"></div>
                <p className="text-xs text-gray-400">Xem tất cả bài viết của tác giả</p>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-50 rounded-full blur-2xl transition-all duration-700 group-hover:scale-150"></div>
          </div>
          
          {/* Latest Bosses small list (mock) */}
          <div className="p-2">
             <h3 className="text-xl font-bold mb-8">Bosses liên quan</h3>
             <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden shrink-0">
                       <Image src={`https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop&random=${i}`} alt="Related boss" width={80} height={80} className="object-cover h-full group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                       <p className="text-xs font-bold text-orange-500 uppercase mb-1 tracking-wider">Mẹo hay</p>
                       <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">7 lý do mèo thích ngủ trên người bạn</h4>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </aside>
    </article>
  );
}
