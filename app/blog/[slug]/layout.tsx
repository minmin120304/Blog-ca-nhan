import React from "react";

export default function PostLayout({
  children,
  comments,
}: {
  children: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="container mx-auto px-4">
        {comments}
      </div>
    </div>
  );
}
