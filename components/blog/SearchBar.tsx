'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedQuery) {
      params.set('q', debouncedQuery);
    } else {
      params.delete('q');
    }
    // Only push if different to avoid infinite loop
    const newPath = `?${params.toString()}`;
    if (newPath !== `?${searchParams.toString()}`) {
      router.push(newPath, { scroll: false });
    }
  }, [debouncedQuery, router, searchParams]);

  return (
    <div className="relative max-w-lg mb-8 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm bài viết về boss..."
        className="block w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-2xl leading-5 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm group-hover:shadow-md"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
