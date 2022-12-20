import { Link } from 'components/Link/Link'
import { Button } from 'components/Button/Button'
import styles from './styles.css'
import { routerPathes } from 'router/routerPathes'

export const BackToHomeButton = () => {
  const link = () => Link({ id: 'a', children: 'Back to Home', href: routerPathes.home, classname: styles.link })
  const btn = Button({ children: link, classname: styles.button })

  return btn
}
