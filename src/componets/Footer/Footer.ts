import styles from './styles/styles.css'

export const Footer = () => {
  const root = document.querySelector('#root')
  const footer = document.createElement('footer')
  const date = document.createElement('span')
  const logoLink = document.createElement('a')
  const logo = document.createElement('img')
  const autors = document.createElement('div')
  const businator = document.createElement('a')
  const aHanchar = document.createElement('a')

  footer.prepend(autors, date, logoLink)

  const linkElemts = [logoLink, businator, aHanchar]
  linkElemts.forEach((e) => (e.target = '_blank'))

  root?.append(footer)
  footer.classList.add(styles.footer!)
  logoLink.href = 'https://rs.school/js/'
  logoLink.append(logo)
  logo.classList.add(styles.logo!)
  logo.src = 'https://rs.school/images/rs_school_js.svg'
  date.textContent = '2023'
  autors.append(businator, aHanchar)
  autors.classList.add(styles.autors!)
  businator.href = 'https://github.com/Businator'
  businator.textContent = 'Businator'
  aHanchar.href = 'https://github.com/A-Hanchar'
  aHanchar.textContent = 'A-Hanchar'
}
