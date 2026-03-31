import { Post, Category } from '@/types';
import postsData from '@/data/posts.json';

export async function getPosts(options?: {
  limit?: number;
  search?: string;
  category?: string;
}): Promise<Post[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let posts = postsData as Post[];

  // Filter by search
  if (options?.search) {
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(options.search!.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(options.search!.toLowerCase())
    );
  }

  // Filter by category
  if (options?.category) {
    posts = posts.filter(post =>
      post.category.slug === options.category
    );
  }

  // Limit results
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const post = (postsData as Post[]).find(p => p.slug === slug);
  return post || null;
}

export async function getAllPosts(): Promise<Post[]> {
  return postsData as Post[];
}

export async function getCategories(): Promise<Category[]> {
  const posts = postsData as Post[];
  const categoryMap = new Map<string, Category>();
  
  posts.forEach(post => {
    categoryMap.set(post.category.id, post.category);
  });
  
  return Array.from(categoryMap.values());
}
