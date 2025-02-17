import React from 'react';
import { bulkImport } from '../utils/bulkImport';

const AdminImport = () => {
  const handleBlogImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const count = await bulkImport.importBlogs(file);
        alert(`Successfully imported ${count} blogs`);
      } catch (error) {
        alert('Error importing blogs');
      }
    }
  };

  const handleStoryImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const count = await bulkImport.importStories(file);
        alert(`Successfully imported ${count} stories`);
      } catch (error) {
        alert('Error importing stories');
      }
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3>Import Blogs</h3>
        <input type="file" accept=".json" onChange={handleBlogImport} />
      </div>
      <div>
        <h3>Import Stories</h3>
        <input type="file" accept=".json" onChange={handleStoryImport} />
      </div>
    </div>
  );
};

export default AdminImport;
