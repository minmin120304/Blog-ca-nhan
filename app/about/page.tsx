import Image from 'next/image';
import { Cat, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Giới thiệu - Mèo Blog',
  description: 'Câu chuyện về Mèo Blog và sứ mệnh mang lại cuộc sống tốt đẹp nhất cho các boss.',
};

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Tận tâm', text: 'Mọi chia sẻ đều đến từ sự yêu thương thật sự dành cho loài mèo.' },
    { icon: Shield, title: 'Tin cậy', text: 'Kiến thức được tổng hợp từ các nguồn chuyên gia về thú y.' },
    { icon: Users, title: 'Cộng đồng', text: 'Kết nối hàng nghìn sen trên khắp đất nước Việt Nam.' },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-bold text-xs uppercase mb-6 tracking-widest">
              Về Mèo Blog
            </div>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Sứ mệnh mang lại niềm vui cho <span className="text-orange-500 underline decoration-amber-300">Boss</span>.</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mèo Blog được ra đời vào một buổi chiều mưa tại TP. Hồ Chí Minh, khi chúng tôi nhận ra rằng việc tìm kiếm một nguồn thông tin nuôi mèo chuẩn xác, bằng tiếng Việt là không hề dễ dàng.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 mb-8">
              <div>
                  <h4 className="text-4xl font-black text-orange-500 mb-2">10k+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Bài viết chia sẻ</p>
              </div>
              <div>
                  <h4 className="text-4xl font-black text-orange-500 mb-2">50k+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Sen tham gia</p>
              </div>
          </div>
          <Link href="/blog" className="btn btn-primary px-8 py-3 text-lg gap-2">
             Xem bài viết mới nhất <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-amber-100 rounded-[60px] rotate-6 animate-pulse scale-95"></div>
            <div className="relative h-full rounded-[60px] overflow-hidden shadow-2xl border-4 border-white">
                <Image src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1000&auto=format&fit=crop" alt="Cute Cat" fill className="object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Cat className="w-6 h-6" />
                </div>
                <div>
                    <h5 className="font-black text-gray-900 leading-tight">Boss Approved</h5>
                    <p className="text-xs text-gray-500">Tin cậy 100%</p>
                </div>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-900 rounded-[60px] p-12 md:p-20 text-white mb-24 overflow-hidden relative">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Giá trị cốt lõi</h2>
              <p className="text-xl text-gray-400">Những điều tạo nên sự khác biệt của Mèo Blog</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {values.map((v) => (
                  <div key={v.title} className="p-10 bg-white/5 border border-white/10 rounded-4xl backdrop-blur-sm group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:bg-orange-600 transition-colors">
                          <v.icon className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{v.text}</p>
                  </div>
              ))}
          </div>
          
          {/* Decorative background blur */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Team CTA */}
      <section className="text-center py-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8 leading-tight">Muốn trở thành một phần của đội ngũ Sen Chuyên Nghiệp?</h2>
          <p className="text-xl text-gray-600 mb-12">Chúng tôi luôn chào đón các cây bút yêu mèo, các bác sĩ thú y và các chuyên gia hành vi động vật cùng đóng góp.</p>
          <Link href="/contact" className="btn btn-primary px-10 py-4 text-xl">
             Tham gia ngay
          </Link>
      </section>
    </div>
  );
}
