import { createElementWithClassName, capitalizeText } from 'helpers'
import { BreadcrumbsProps } from './types'
import { Link } from 'components/Link'
import styles from './styles.css'

export const Breadcrumbs = ({ elements }: BreadcrumbsProps) => {
  const ul = createElementWithClassName({ tagName: 'ul', classname: styles.list })

  elements.forEach(({ name, url }) => {
    const li = createElementWithClassName({ tagName: 'li', classname: styles.breadcrumbs })
    li.append(Link({ id: `item-${url}`, href: url, children: capitalizeText(name), classname: styles.breadcrumbs }))
    ul.append(li)
  })

  return ul

  // const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  // const breadCrumbs = [] as BreadcrumbsProps
  // breadCrumbs.push({ name: 'Go to Store', url: routerPathes.home })
  // const product = products.filter((e) => e.id === id)
  // product.forEach((prod) => {
  //   for (const key in prod) {
  //     if (key === 'category') {
  //       breadCrumbs.push({ name: prod[key], url: urlInstanse.createURL(key, prod[key]).toString() })
  //     }
  //     if (key === 'brand') {
  //       breadCrumbs.push({ name: prod[key], url: urlInstanse.createURL(key, prod[key]).toString() })
  //     }
  //   }
  // })
  // const el = breadCrumbs[1]
  // breadCrumbs[1] = breadCrumbs[2] as { name: string; url: string }
  // breadCrumbs[2] = el as { name: string; url: string }
  // breadCrumbs.push({ name: title, url: '' })
  // breadCrumbs.forEach((crumb) =>
  //   container.append(
  //     Link({
  //       id: `link-to${crumb.name}`,
  //       children: capitalizeText(crumb.name),
  //       href: crumb.url,
  //       classname: styles.breadcrumbs,
  //     }),
  //   ),
  // )
  // return container
}
