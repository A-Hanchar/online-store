import { routerPathes } from 'router/routerPathes'
import { createElementWithClassName, capitalizeText } from 'helpers'
import styles from './styles.css'
import { BreadcrumbsProps } from './types'
import { Text } from 'components/Text'
import { Link } from 'components/Link'

export const Breadcrumbs = ({ category, brand, title }: BreadcrumbsProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    Link({ id: 'link-to-store', children: 'Go to Store', href: routerPathes.home, classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: '>>', classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: capitalizeText(category), classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: '>>', classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: capitalizeText(brand), classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: '>>', classname: styles.breadcrumbs }),
    Text({ tagName: 'span', text: capitalizeText(title), classname: styles.breadcrumbs }),
  )

  return container
}
