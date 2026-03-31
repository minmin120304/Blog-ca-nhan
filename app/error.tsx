'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog Error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-6">
        <AlertTriangle className="w-10 h-10" />
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-4">Ối! Đã có lỗi xảy ra</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-lg">
        Hình như "hoàng thượng" vừa làm đổ bát nước vào máy chủ. Chúng tôi đang cố gắng khắc phục!
      </p>
      <button
        onClick={() => reset()}
        className="btn btn-primary px-8 py-3 text-lg gap-2"
      >
        <RefreshCcw className="w-5 h-5" /> Thử lại xem sao
      </button>
    </div>
  );
}
