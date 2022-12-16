import { Layout } from 'components/Layout'
import { RootComponent } from 'helpers'
import { router } from './router'
import { routerPathes } from './routerPathes'
import { getURLParams } from './utils'

export const renderComponent = () => {
  const url = new URL(window.location.href)
  const { productId } = getURLParams()

  RootComponent?.replaceChildren()

  const component = router.find(({ pathname }) => {
    if (productId) {
      const productPathname = `${routerPathes.products}/${productId}`
      const desiredPathname = productPathname.replace(productId, ':productId')

      return pathname === desiredPathname
    }

    return pathname === url.pathname
  })?.content

  if (component) {
    const pageContent = Layout({ children: component })

    RootComponent?.append(pageContent)

    return
  }

  window.location.replace(routerPathes.notFound)
}
