export type StoryCategory = 'recovery' | 'inspiration' | 'family' | 'all';

export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: StoryCategory;
  excerpt: string;
  tags?: string[];
  image?: string;
}
