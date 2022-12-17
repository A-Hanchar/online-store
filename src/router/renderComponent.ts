import { Layout } from 'components/Layout'
import { RootComponent } from 'helpers'
import { routerPathes } from './routerPathes'
import { getRoute } from './utils'

export const renderComponent = async () => {
  RootComponent?.replaceChildren()

  const route = getRoute()

  if (route.path === routerPathes.notFound) {
    window.history.pushState({}, '', routerPathes.notFound)
  }

  const content = await Layout({ children: route.content })

  RootComponent?.append(content)
}
