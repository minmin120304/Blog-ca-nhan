interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg prose-orange max-w-none prose-headings:font-black prose-p:leading-relaxed prose-p:text-gray-600 prose-strong:text-gray-900 prose-img:rounded-3xl prose-img:shadow-xl">
      <div className="whitespace-pre-line text-lg leading-loose">
        {content}
      </div>
    </div>
  );
}
