import { Link } from 'components/Link'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'

export const Authors = () => {
  const authors = createElementWithClassName({ tagName: 'div', classname: styles.authors })

  const businator = Link({
    id: 'businator',
    children: 'Businator',
    href: 'https://github.com/Businator',
    classname: styles.author,
    target: '_blank',
  })

  const aHanchar = Link({
    id: 'aHanchar',
    children: 'A-Hanchar',
    href: 'https://github.com/A-Hanchar',
    classname: styles.author,
    target: '_blank',
  })

  authors.append(businator, aHanchar)

  return authors
}
