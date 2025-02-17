export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image?: string;
  excerpt: string;
  tags?: string[];
}
