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
}
