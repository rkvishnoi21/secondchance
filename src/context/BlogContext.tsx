import React, { createContext, useContext, useState } from 'react';
import { Blog } from '../types/Blog';
import { blogData } from '../data/blogData'; // Import the blogData

interface BlogContextType {
  blogs: Blog[];
  categories: string[];
  getBlogById: (id: string) => Blog | undefined;
  getRelatedBlogs: (category: string, currentId: string) => Blog[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with blogData instead of empty array
  const [blogs] = useState<Blog[]>(blogData);

  // Get unique categories from blogs
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const getBlogById = (id: string) => blogs.find(blog => blog.id === id);

  const getRelatedBlogs = (category: string, currentId: string) => 
    blogs.filter(blog => blog.category === category && blog.id !== currentId).slice(0, 3);

  return (
    <BlogContext.Provider value={{ blogs, categories, getBlogById, getRelatedBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
