import { notFoundRoute, rootRoute, router, RouterOwnObject, routerPathes } from 'router'

export const getRoute = () => {
  const url = new URL(window.location.href)
  const pathname = url.pathname

  if (pathname === routerPathes.home) {
    return rootRoute
  }

  const getDeeplsRoute = (routes: RouterOwnObject[] | undefined, pathnames: string[]): RouterOwnObject => {
    if (!routes) {
      return notFoundRoute
    }

    const [firstPathname, ...restPathnames] = pathnames

    if (pathnames.length === 1) {
      return routes.find(({ path }) => (path.includes(':') ? true : path === `/${firstPathname!}`)) ?? notFoundRoute
    }

    const nextRoutes = routes.find(({ path, childrenRoutes }) => {
      const hasChildrenRoutes = Boolean(childrenRoutes)

      if (path.includes(':')) {
        return hasChildrenRoutes
      }

      return path === `/${firstPathname!}` && hasChildrenRoutes
    })?.childrenRoutes

    return getDeeplsRoute(nextRoutes, restPathnames)
  }

  const pathNameParts = pathname.split('/').filter(Boolean)

  return getDeeplsRoute(router, pathNameParts)
}
