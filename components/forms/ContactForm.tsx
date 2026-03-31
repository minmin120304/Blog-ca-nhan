'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { toast } from 'react-hot-toast';
import { Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form data submitted:', data);
      
      toast.success('Hệ thống đã nhận được tin nhắn từ bạn! Boss sẽ phản hồi sớm nhất có thể.', {
        duration: 5000,
        style: {
          borderRadius: '16px',
          background: '#333',
          color: '#fff',
          padding: '16px',
        },
      });
      
      reset();
    } catch (error) {
      toast.error('Gửi tin thất bại, thử lại sau nhé!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 px-1">
            Họ tên *
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Họ tên của bạn..."
            className={`w-full px-5 py-3 rounded-2xl bg-gray-50 border transition-all outline-none ${
              errors.name ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-gray-100 focus:ring-4 focus:ring-orange-100 focus:border-orange-500'
            }`}
          />
          {errors.name && (
            <p className="mt-2 text-xs font-bold text-red-500 px-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 px-1">
            Email *
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className={`w-full px-5 py-3 rounded-2xl bg-gray-50 border transition-all outline-none ${
              errors.email ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-gray-100 focus:ring-4 focus:ring-orange-100 focus:border-orange-500'
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-xs font-bold text-red-500 px-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 px-1">
          Tiêu đề *
        </label>
        <input
          {...register('subject')}
          id="subject"
          type="text"
          placeholder="Bạn muốn trao đổi về chủ đề gì?"
          className={`w-full px-5 py-3 rounded-2xl bg-gray-50 border transition-all outline-none ${
            errors.subject ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-gray-100 focus:ring-4 focus:ring-orange-100 focus:border-orange-500'
          }`}
        />
        {errors.subject && (
          <p className="mt-2 text-xs font-bold text-red-500 px-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 px-1">
          Lời nhắn cho Boss *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Nhập thông tin tại đây..."
          className={`w-full px-5 py-3 rounded-2xl bg-gray-50 border transition-all outline-none resize-none ${
            errors.message ? 'border-red-400 focus:ring-4 focus:ring-red-100' : 'border-gray-100 focus:ring-4 focus:ring-orange-100 focus:border-orange-500'
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-2 text-xs font-bold text-red-500 px-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary py-4 text-lg gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Đang xử lý...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            Gửi liên hệ ngay
          </>
        )}
      </button>
    </form>
  );
}
