import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Image404 } from './components/Image404'
import styles from './styles.css'
import { routerPathes } from 'router/routerPathes'
import { modalWindow } from 'components/ModalWindow'

export const NotFound = async () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  container.append(
    Image404(),
    Text({ tagName: 'h1', text: 'Sorry, it looks like the page get lost', classname: styles.h1 }),
    Text({ tagName: 'h2', text: '(or someone has stolen it recently)', classname: styles.h2 }),
    await Link({ id: 'a', children: 'Back to Home', href: routerPathes.home, classname: styles.link }),
  )

  const modal = modalWindow()

  container.append(await modal)

  return container
}
