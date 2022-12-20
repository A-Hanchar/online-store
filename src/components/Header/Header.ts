import { Basket, Logo } from './components'
import styles from './styles.css'
import { AddContentType } from './types'

export const Header = (() => {
  const header = document.createElement('header')
  styles.header && header.classList.add(styles.header)

  const addContent = async ({ content, className }: AddContentType) => {
    const q = await content

    header.append(q)
    className && q.classList.add(className)
  }

  const contentList: AddContentType[] = [{ content: Logo, className: styles.logoWrapper }, { content: Basket }]

  contentList.forEach(addContent)

  return header
})()
