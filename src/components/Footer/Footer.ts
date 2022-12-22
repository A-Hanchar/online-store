import { createElementWithClassName } from 'helpers/createElementWithClassName'
import { Authors } from './components/Authors/'
import { Text } from './../Text/Text'
import { Logo } from './components/Logo/Logo'
import styles from './styles.css'

export const Footer = () => {
  const footer = createElementWithClassName({ tagName: 'footer', classname: styles.footer })

  const date = Text({ tagName: 'span', text: '2023', classname: styles.date })

  footer.prepend(Authors(), date, Logo())

  return footer
}
