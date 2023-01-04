import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'

import styles from './styles.css'
import { StubLayoutProps } from './types'

export const StubLayout = ({ text }: StubLayoutProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(Text({ tagName: 'h2', text, classname: styles.text }))

  return wrapper
}
