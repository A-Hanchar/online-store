import { Basket, Logo } from './components'
import styles from './styles.css'
import { AddContentType } from './types'

export const Header = async () => {
  const header = document.createElement('header')
  styles.header && header.classList.add(styles.header)

  const addContent = async ({ content, className }: AddContentType) => {
    const addedContent = await content()

    header.append(addedContent)
    className && addedContent.classList.add(className)
  }

  await Promise.all([addContent({ content: Logo, className: styles.logoWrapper }), addContent({ content: Basket })])

  return header
}
