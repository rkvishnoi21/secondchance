import React from 'react';
import { BlogPost } from '../types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <span className="text-sm text-teal-600 px-2 py-1 rounded-full bg-teal-50">
            {post.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}