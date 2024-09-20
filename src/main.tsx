import './main.css';

import type { Router as RemixRouter } from '@remix-run/router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>TELA PRINCIPAL</div>,
    errorElement: <div>Page Not Found</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...loginRoutes, ...mainRoutes]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
