import { BackToHomeButton } from './components/BackToHomeButton'
import { Image404 } from './components/Image404'
import { Header2 } from './components/Header2'
import { Header1 } from './components/Header1'
import styles from './styles.css'

export const NotFound = async () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  container.append(Image404(), Header1, Header2, await BackToHomeButton())

  return container
}
