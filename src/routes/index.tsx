import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resources from '../pages/Resources';
import Stories from '../pages/Stories';
import StoryView from '../components/StoryView';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/stories',
    element: <Stories />,
  },
  {
    path: '/stories/:id',
    element: <StoryView />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/:id',
    element: <BlogPost />,
  }
];
