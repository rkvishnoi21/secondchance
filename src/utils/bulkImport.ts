import { importBlogsFromJSON } from '../data/blogData';
import { importStoriesFromJSON } from '../data/storyData';
import { Blog } from '../types/Blog';
import { Story } from '../types/Story';

export const bulkImport = {
  // Import blogs from JSON file
  importBlogs: async (jsonFile: File) => {
    try {
      const text = await jsonFile.text();
      const data: Blog[] = JSON.parse(text);
      return importBlogsFromJSON(data);
    } catch (error) {
      console.error('Error importing blogs:', error);
      throw error;
    }
  },

  // Import stories from JSON file
  importStories: async (jsonFile: File) => {
    try {
      const text = await jsonFile.text();
      const data: Story[] = JSON.parse(text);
      return importStoriesFromJSON(data);
    } catch (error) {
      console.error('Error importing stories:', error);
      throw error;
    }
  }
};
