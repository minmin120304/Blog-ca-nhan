import { getPosts } from "@/lib/api";
import PostList from "@/components/blog/PostList";
import Link from "next/link";
import { ArrowRight, Cat, Zap } from "lucide-react";
import Image from "next/image";

export default async function HomePage() {
  const latestPosts = await getPosts({ limit: 3 });

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center p-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/10 backdrop-blur-[2px]"></div>
        </div>
      
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500/20 backdrop-blur-xl border border-white/20 rounded-full text-orange-200 font-bold text-sm mb-8 animate-float">
             <Cat className="w-5 h-5" /> 100% Nguyên bản & Đam mê
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-[1.1] tracking-tight">
            Chào mừng bạn đến với <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Mèo Blog</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 mb-12 leading-relaxed drop-shadow-xl font-light opacity-90 max-w-3xl mx-auto">
            Khám phá thế giới kì diệu của các boss qua những câu chuyện hữu ích và kiến thức chăm sóc từ các chuyên gia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/blog" className="btn btn-primary px-12 py-5 text-xl font-black shadow-2xl shadow-orange-500/40"> 
               Khám phá Boss ngay 
            </Link>
            <Link href="/about" className="btn bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 text-xl font-bold px-12 py-5"> 
               Tìm hiểu thêm 
            </Link>
          </div>
        </div>

        {/* Floating statistics */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl hidden md:grid grid-cols-3 gap-8 px-4">
            <div className="p-6 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/10 text-white flex flex-col items-center">
                <span className="text-3xl font-black mb-1">500+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Mẹo Chăm Sóc</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/10 text-white flex flex-col items-center">
                <span className="text-3xl font-black mb-1">50k+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Sen Yêu Quý</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/10 text-white flex flex-col items-center">
                <span className="text-3xl font-black mb-1">100+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Giống Mèo</span>
            </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-lg font-bold text-xs uppercase mb-4 tracking-widest">
                <Zap className="w-4 h-4 fill-current" /> Bài viết mới nhất
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Tuyển tập kiến thức <span className="text-orange-500 italic font-medium">quan trọng</span> cho Sen</h2>
           </div>
           <Link href="/blog" className="group flex items-center gap-3 text-lg font-black text-gray-900 hover:text-orange-600 transition-colors">
              Xem tất cả bài viết 
              <div className="p-3 bg-gray-100 rounded-full group-hover:bg-orange-100 transition-colors">
                 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
           </Link>
        </div>

        <PostList posts={latestPosts} />
      </section>

      {/* Community / Newsletter (Visual only for now) */}
      <section className="container mx-auto px-4">
         <div className="bg-orange-500 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Đừng để Boss phải chờ đợi kiến thức mới!</h2>
               <p className="text-xl md:text-2xl text-orange-50 mb-12 opacity-90 leading-relaxed font-light">
                  Đăng ký email để nhận những bản tin về sức khỏe, dinh dưỡng và mẹo chăm mèo hay nhất mỗi tuần.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Nhập email của bạn..." 
                    className="flex-1 px-8 py-5 rounded-3xl bg-white/20 border border-white/30 backdrop-blur-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all text-lg"
                  />
                  <button className="px-10 py-5 bg-white text-orange-600 font-black rounded-3xl text-lg hover:bg-orange-50 transition-colors shadow-xl">
                    Đăng ký ngay
                  </button>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px]"></div>
         </div>
      </section>
    </div>
  );
}
