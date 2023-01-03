import { Link } from 'components/Link'

import { createElementWithClassName } from 'helpers'

import styles from './styles.css'

export const Authors = () => {
  const authors = createElementWithClassName({ tagName: 'div', classname: styles.authors })

  const gitHubIds = ['Businator', 'A-Hanchar']

  gitHubIds.forEach((userId) => {
    authors.append(
      Link({
        children: userId,
        href: `https://github.com/${userId}`,
        classname: styles.author,
        target: '_blank',
      }),
    )
  })

  return authors
}
