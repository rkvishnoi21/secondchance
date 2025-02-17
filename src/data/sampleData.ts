import { BlogPost, Resource } from '../types';

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Journey to Recovery',
    content: 'After 10 years of struggling with gambling addiction, I finally found the strength to seek help through Second Chance Foundation...',
    author: 'Anonymous',
    date: '2024-03-15',
    category: 'story',
    tags: ['recovery', 'personal-story', 'hope']
  },
  {
    id: '2',
    title: 'Understanding Gambling Triggers',
    content: 'Recognizing and managing triggers is a crucial step in recovery...',
    author: 'Dr. Sarah Johnson',
    date: '2024-03-14',
    category: 'resource',
    tags: ['education', 'triggers', 'professional-advice']
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Second Chance Foundation Helpline',
    description: 'Confidential support available around the clock',
    type: 'hotline',
    contact: '1-800-522-4700'
  },
  {
    id: '2',
    title: 'Weekly Support Group',
    description: 'Join our caring community for weekly virtual meetings',
    type: 'support-group',
    contact: 'support@secondchancefoundation.in'
  }
];