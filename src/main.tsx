import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'modern-normalize';
import './index.css';

import RootLayout from './layouts/RootLayout.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import Portfolio from './pages/Portfolio.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Blog',
        element: <Blog />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
