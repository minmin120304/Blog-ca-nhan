import { NextRequest, NextResponse } from 'next/server';
import { getPosts } from '@/lib/api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || undefined;
  const category = searchParams.get('category') || undefined;
  const limitStr = searchParams.get('limit');
  const limit = limitStr ? parseInt(limitStr) : undefined;

  try {
    const posts = await getPosts({ search: q, category, limit });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
