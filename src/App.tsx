import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Stories from './pages/Stories';
import Fantasy from './pages/Fantasy';
import Layout from './components/Layout';
import StoryView from './components/StoryView';
import { StoryProvider } from './context/StoryContext';
import Blog from './pages/Blog';
import { BlogProvider } from './context/BlogContext';
import BlogPost from './pages/BlogPost';
import GtagRouteTracker from './components/GtagRouteTracker';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GtagRouteTracker />
      <StoryProvider>
        <BlogProvider>
          <div className="min-h-screen flex flex-col">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/fantasy" element={<Fantasy />} />
                <Route path="/stories/:id" element={<StoryView />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Routes>
            </Layout>
          </div>
        </BlogProvider>
      </StoryProvider>
    </Suspense>
  );
}

export default App;