import { Logo } from 'components/Logo'
import { addClassnameToElement, createElementWithClassName, localStorageInstanse } from 'helpers'

import styles from './styles.css'
import { AddContentType } from './types'

export const Header = () => {
  const header = createElementWithClassName({ tagName: 'header', classname: styles.header })

  const addContent = ({ content, classname }: AddContentType) => {
    header.append(content)

    addClassnameToElement({ element: content, classname })
  }

  addContent({ content: Logo(), classname: styles.logoWrapper })
  addContent({ content: localStorageInstanse.BasketElement })

  return header
}
