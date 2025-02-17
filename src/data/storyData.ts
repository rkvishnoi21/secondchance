import { Story } from '../types/Story';

export const storyData: Story[] = [
  // Your story entries go here
  {
    id: "1",
    title: "My Recovery Journey",
    content: "Detailed story content...",
    author: "John Doe",
    date: "2024-02-10",
    readTime: 5,
    category: "Recovery",
    excerpt: "A personal story of triumph...",
    tags: ["Recovery", "Hope", "Support"]
  },
  // Add more stories...
];

export const importStoriesFromJSON = (jsonData: Story[]) => {
  const validStories = jsonData.filter(story => {
    return story.id && story.title && story.content;
  });
  
  storyData.push(...validStories);
  return validStories.length;
};
