import { Body } from 'components/Body'
import { Layout } from 'components/Layout'
import { routerPathes } from './routerPathes'
import { getRoute } from './utils'

export const renderComponent = async () => {
  Body.replaceChildren()

  const route = getRoute()

  if (route.path === routerPathes.notFound) {
    window.history.pushState({}, '', routerPathes.notFound)
  }

  Body.append(await Layout({ children: route.content }))
}
