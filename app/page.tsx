export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px-300px)] items-center justify-center py-20 px-4 bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          Chào mừng bạn đến với <span className="text-orange-400">Mèo Blog</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed drop-shadow-md">
          Khám phá thế giới kì diệu của các chú boss qua những câu chuyện hữu ích và kiến thức chăm sóc từ các chuyên gia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary text-lg px-10 py-4"> Khám phá ngay </button>
          <button className="btn bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 text-lg px-10 py-4"> Tham gia cộng đồng </button>
        </div>
      </div>
    </div>
  );
}
