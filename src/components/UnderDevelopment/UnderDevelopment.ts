import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'

export const UnderDevelopment = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(Text({ tagName: 'h1', text: 'Page is under development' }))

  return wrapper
}
