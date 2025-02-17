import React, { createContext, useContext, useState, useEffect } from 'react';
import { Story } from '../types/Story';
import { samplePosts } from '../data/sampleData';

interface StoryContextType {
  stories: Story[];
  addStory: (story: Story) => void;
  getStoryById: (id: string) => Story | undefined;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stories, setStories] = useState<Story[]>(() => {
    const savedStories = localStorage.getItem('stories');
    return savedStories ? JSON.parse(savedStories) : samplePosts;
  });

  const addStory = (newStory: Story) => {
    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
  };

  const getStoryById = (id: string) => {
    return stories.find(story => story.id === id);
  };

  return (
    <StoryContext.Provider value={{ stories, addStory, getStoryById }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStories = () => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error('useStories must be used within a StoryProvider');
  }
  return context;
};
