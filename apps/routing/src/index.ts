import { createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import { RouterProvider } from '@tanstack/react-router';
import { makeRouterContext } from './context/routerContext';

const context = makeRouterContext();

// Create a new router instance
const router = createRouter({ routeTree, context });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router };

export { RouterProvider };
