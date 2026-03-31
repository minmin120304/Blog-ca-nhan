import Link from 'next/link';
import { Cat, ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-8 animate-bounce">
        <Cat className="w-20 h-20" />
      </div>
      <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Boss đi lạc rùi!</h2>
      <p className="text-xl text-gray-500 max-w-md mb-10">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị "hoàng thượng" tha đi mất.
      </p>
      <Link href="/" className="btn btn-primary px-10 py-4 text-lg gap-2">
        <ChevronLeft className="w-5 h-5" /> Quay về nhà với Boss
      </Link>
    </div>
  );
}
