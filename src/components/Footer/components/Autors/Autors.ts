import { Link } from 'components/Link'
import styles from './styles.css'

export const Autors = async () => {
  const autors = document.createElement('div')

  styles.autors && autors.classList.add(styles.autors)
  const businator = await Link({
    id: 'businator',
    children: 'Businator',
    href: 'https://github.com/Businator',
    classname: styles.autor,
  })
  const aHanchar = await Link({
    id: 'aHanchar',
    children: 'A-Hanchar',
    href: 'https://github.com/A-Hanchar',
    classname: styles.autor,
  })
  businator.target = '_blank'
  aHanchar.target = '_blank'
  autors.append(businator, aHanchar)

  return autors
}
