import Link from 'next/link';
import { Cat, Globe, Mail, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
              <Cat className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Mèo Blog
            </span>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Chia sẻ tình yêu và kiến thức chăm sóc mèo. Nơi hội ngộ của những tâm hồn yêu boss bốn chân.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Khám phá</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Danh sách bài viết</Link></li>
            <li><Link href="/blog/category/huong-dan" className="hover:text-orange-500 transition-colors">Hướng dẫn chăm sóc</Link></li>
            <li><Link href="/blog/category/kien-thuc" className="hover:text-orange-500 transition-colors">Kiến thức chung</Link></li>
            <li><Link href="/blog/category/kham-pha" className="hover:text-orange-500 transition-colors">Khám phá giống mèo</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Về chúng tôi</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/about" className="hover:text-orange-500 transition-colors">Câu chuyện thương hiệu</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Liên hệ - Góp ý</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-500 transition-colors">Chính sách bảo mật</Link></li>
            <li><Link href="/terms" className="hover:text-orange-500 transition-colors">Điều khoản sử dụng</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Đăng ký bản tin</h4>
          <p className="text-gray-400 mb-6">Đăng ký để nhận những thông tin mới nhất về cách chăm sóc mèo.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              className="px-4 py-2 bg-gray-800 border-none rounded-md flex-1 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
            />
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 transition-colors rounded-md text-white font-medium">
              Gửi ngay
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} Mèo Blog. Bản quyền thuộc về Sen Việt Nam.</p>
      </div>
    </footer>
  );
}
