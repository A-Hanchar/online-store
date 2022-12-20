import { Link } from './../../../../components/Link/Link'
import { Button } from './../../../../components/Button/Button'
import styles from './styles.css'

export const BackToHomeButton = () => {
  const link = () => Link({ id: 'a', children: 'Back to Home', href: '/', classname: styles.link })
  const btn = Button({ children: link, classname: styles.button })

  return btn
}
