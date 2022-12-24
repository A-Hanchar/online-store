import { urlInstanse } from 'helpers/urlInstanse'
import { notFoundRoute, rootRoute, router, RouterOwnObject } from 'router'
import { routerPathes } from 'router/routerPathes'
import { SYMBOL } from 'types'

export const getRoute = () => {
  const url = urlInstanse.getUrl()
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
      return (
        routes.find(({ path }) => (path.includes(SYMBOL.COLON) ? true : path === `${SYMBOL.SLASH}${firstPathname!}`)) ??
        notFoundRoute
      )
    }

    const nextRoutes = routes.find(({ path, childrenRoutes }) => {
      const hasChildrenRoutes = Boolean(childrenRoutes)

      if (path.includes(SYMBOL.COLON)) {
        return hasChildrenRoutes
      }

      return path === `${SYMBOL.SLASH}${firstPathname!}` && hasChildrenRoutes
    })?.childrenRoutes

    return getDeeplsRoute(nextRoutes, restPathnames)
  }

  const pathNameParts = pathname.split(SYMBOL.SLASH).filter(Boolean)

  return getDeeplsRoute(router, pathNameParts)
}
