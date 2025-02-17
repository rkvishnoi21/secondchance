interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags?: string[];
  readTime?: string;
  image?: string;
}

export type { Story };
