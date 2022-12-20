import { Text } from 'components/Text'
import { BackToHomeButton } from './components/BackToHomeButton'
import { Image404 } from './components/Image404'
import styles from './styles.css'

export const NotFound = async () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  container.append(
    Image404(),
    Text({ tagName: 'h1', text: 'Sorry, it looks like the page get lost', classname: styles.h1 }),
    Text({ tagName: 'h2', text: '(or someone has stolen it recently)', classname: styles.h2 }),
    await BackToHomeButton(),
  )

  return container
}
