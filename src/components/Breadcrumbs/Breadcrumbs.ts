import { Link } from 'components/Link'

import { Text } from 'components/Text'
import { SYMBOL } from 'enums'
import { createElementWithClassName, capitalizeText } from 'helpers'

import styles from './styles.css'
import { BreadcrumbsProps } from './types'

export const Breadcrumbs = ({ elements }: BreadcrumbsProps) => {
  const ul = createElementWithClassName({ tagName: 'ul', classname: styles.list })

  elements.forEach(({ name, url }, index) => {
    const li = createElementWithClassName({ tagName: 'li', classname: styles.element })

    li.append(Link({ href: url, children: capitalizeText(name), classname: styles.link }))

    if (index !== elements.length - 1) {
      li.append(Text({ tagName: 'span', text: SYMBOL.SLASH, classname: styles.slash }))
    }

    ul.append(li)
  })

  return ul
}
