import { Autors } from './components/Autors/Autors'
import { Text } from './../Text/Text'
import { Logo } from './components/Logo/Logo'
import { addClassnameToElement } from 'helpers'
import styles from './styles.css'

export const Footer = async () => {
  const footer = document.createElement('footer')

  addClassnameToElement({ element: footer, classname: styles.footer })

  const date = Text({ tagName: 'span', text: '2023', classname: styles.date })

  const logo = await Logo()
  logo.target = '_blank'

  footer.prepend(await Autors(), date, logo)

  return footer
}
