import { RouterContext } from '../types/routerContext.type';

export const makeRouterContext = (): RouterContext => ({
  isAuthenticated: () => false,
});
