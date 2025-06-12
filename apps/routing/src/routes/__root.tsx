import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { RouterContext } from "../types/routerContext.type";


export const Route = createRootRouteWithContext()<RouterContext>({
  component: Root
})

function Root () {
  return <Outlet />
}