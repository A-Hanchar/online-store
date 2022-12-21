import styles from './styles.css'

export const Footer = () => {
  const footer = document.createElement('footer')
  styles.footer && footer.classList.add(styles.footer)

  footer.innerText = 'Footer'

  return footer
}
