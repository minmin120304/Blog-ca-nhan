'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Post } from '@/types';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  variant?: 'large' | 'compact';
}

export default function PostCard({ post, variant = 'compact' }: PostCardProps) {
  const isLarge = variant === 'large';

  return (
    <article className={cn(
      "group card overflow-hidden flex flex-col h-full",
      isLarge && "md:flex-row md:gap-8"
    )}>
      {/* Cover Image Container */}
      <div className={cn(
        "relative overflow-hidden",
        isLarge ? "md:w-1/2 aspect-video" : "aspect-[16/10]"
      )}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm shadow-md">
            {post.category.name}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className={cn(
        "p-6 flex flex-col flex-grow",
        isLarge && "md:w-1/2"
      )}>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <time>{format(new Date(post.publishedAt), 'dd MMM yyyy', { locale: vi })}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime} phút đọc</span>
          </div>
        </div>

        <h3 className={cn(
          "font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3 leading-tight",
          isLarge ? "text-2xl md:text-3xl" : "text-xl line-clamp-2"
        )}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
               <Image 
                 src={post.author.avatar} 
                 alt={post.author.name} 
                 fill 
                 className="object-cover" 
               />
             </div>
             <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 hover:gap-2 transition-all"
          >
            Đọc thêm <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
