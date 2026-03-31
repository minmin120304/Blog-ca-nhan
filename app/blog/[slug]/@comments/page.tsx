import CommentForm from "@/components/blog/CommentForm";
import { getPostBySlug } from "@/lib/api";

interface CommentsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CommentsPage({ params }: CommentsPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return null;

  return (
    <section className="mt-20 pt-20 border-t border-gray-100 max-w-4xl">
      <h2 className="text-3xl font-black mb-10">Cộng đồng <span className="text-orange-500 italic">Sen</span> thảo luận</h2>
      <CommentForm postId={post.id} />
    </section>
  );
}
