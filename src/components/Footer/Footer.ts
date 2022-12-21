import { addClassnameToElement } from 'helpers'
import styles from './styles.css'

export const Footer = () => {
  const footer = document.createElement('footer')

  addClassnameToElement({ element: footer, classname: styles.footer })

  footer.innerText = 'Footer'

  return footer
}
