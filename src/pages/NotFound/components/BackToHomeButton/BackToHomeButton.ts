import { Text } from './../../../../components/Text/Text'
import { Link } from './../../../../components/Link/Link'
import { Button } from './../../../../components/Button/Button'
import styles from './styles.css'

export const BackToHomeButton = () => {
  const span = Text({ tagName: 'span', text: 'Back to Home', classname: styles.link })
  const link = Link({ id: 'a', children: span, href: '/' })
  const btn = Button({ children: link, classname: styles.button })

  return btn
}
