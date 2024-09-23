import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productScreens } from './modules/product/routes';
import { verifyLoggedIn } from './shared/functions/connections/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

const routes: RouteObject[] = [...loginRoutes, ...firstScreenRoutes];
const routesLoggedIn: RouteObject[] = [...productScreens];

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const router: RemixRouter = createBrowserRouter([
    ...routes,
    ...routesLoggedIn.map((route) => ({
      ...route,
      loader: () => verifyLoggedIn(setUser, user),
    })),
  ]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
