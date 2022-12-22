import { Authors } from './components/Authors/'
import { Text } from './../Text/Text'
import { Logo } from './components/Logo/Logo'
import styles from './styles.css'
import { addClassnameToElement } from 'helpers'

export const Footer = () => {
  const footer = document.createElement('footer')

  addClassnameToElement({ element: footer, classname: styles.footer })

  const date = Text({ tagName: 'span', text: '2023', classname: styles.date })

  const logo = Logo()
  logo.target = '_blank'

  footer.prepend(Authors(), date, logo)

  return footer
}
