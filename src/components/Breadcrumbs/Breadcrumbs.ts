import { createElementWithClassName, capitalizeText } from 'helpers'
import styles from './styles.css'
import { BreadcrumbsProps } from './types'
import { Link } from 'components/Link'

export const Breadcrumbs = (array: BreadcrumbsProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  array.forEach((e) =>
    container.append(
      Link({ id: `link-to${e.name}`, children: capitalizeText(e.name), href: e.url, classname: styles.breadcrumbs }),
    ),
  )

  return container
}
