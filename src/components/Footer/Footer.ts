import { RSLogo } from 'components/RSLogo'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { Text } from './../Text/Text'
import { Authors } from './components/Authors/'
import styles from './styles.css'

export const Footer = () => {
  const footer = createElementWithClassName({ tagName: 'footer', classname: styles.footer })

  const date = Text({ tagName: 'span', text: '2023', classname: styles.date })

  footer.prepend(Authors(), date, RSLogo())

  return footer
}
