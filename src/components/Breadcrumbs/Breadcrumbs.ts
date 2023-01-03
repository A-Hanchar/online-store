import { createElementWithClassName, capitalizeText } from 'helpers'
import { BreadcrumbsProps } from './types'
import { Link } from 'components/Link'
import styles from './styles.css'
import { Text } from 'components/Text'
import { SYMBOL } from 'enums'

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
