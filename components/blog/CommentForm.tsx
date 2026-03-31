'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema, CommentFormData } from '@/lib/validations';
import { useState } from 'react';
import { Loader2, MessageSquare, User } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [comments, setComments] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentFormData) => {
    // Simulate API call & Optimistic Update
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newComment = {
      id: Math.random().toString(),
      author: data.author,
      content: data.content,
      createdAt: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    toast.success('Bình luận đã được gửi! Boss sẽ duyệt sớm nha.');
    reset();
  };

  return (
    <div className="space-y-12">
      <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
           <MessageSquare className="w-5 h-5 text-orange-500" /> Để lại bình luận
        </h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative group">
             <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <User className="w-5 h-5" />
             </div>
             <input
               {...register('author')}
               placeholder="Tên của bạn..."
               className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-100 outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all font-medium"
             />
             {errors.author && <p className="text-xs text-red-500 mt-1 font-bold">{errors.author.message}</p>}
          </div>

          <textarea
            {...register('content')}
            rows={4}
            placeholder="Bạn đang nghĩ gì về bài viết này?"
            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all resize-none font-medium"
          ></textarea>
          {errors.content && <p className="text-xs text-red-500 mt-1 font-bold">{errors.content.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary px-8 py-3 rounded-xl gap-2 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Gửi bình luận"}
          </button>
        </form>
      </div>

      {/* Render comments list */}
      {comments.length > 0 && (
        <div className="space-y-8">
           <h3 className="text-2xl font-black text-gray-900 px-2">Bình luận mới ({comments.length})</h3>
           <div className="space-y-6">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-50 shadow-sm animate-float">
                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 shrink-0 font-bold">
                      {c.author.charAt(0).toUpperCase()}
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900 mb-1">{c.author}</h4>
                      <p className="text-gray-600 leading-relaxed">{c.content}</p>
                      <time className="text-[10px] uppercase font-black text-gray-400 mt-2 block tracking-widest">vừa xong</time>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );
}
