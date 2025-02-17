export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: 'story' | 'resource';
  tags: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'hotline' | 'counseling' | 'support-group';
  contact: string;
}