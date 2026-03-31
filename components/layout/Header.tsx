'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Cat, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Giới thiệu', href: '/about' },
    { label: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Cat className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Mèo Blog
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 font-medium hover:text-orange-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="p-2 text-gray-500 hover:bg-orange-50 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-gray-600 font-medium hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
