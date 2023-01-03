import { Text } from 'components/Text'

import styles from './styles.css'
import { H3WithSpanProps } from './types'

export const H3WithSpan = ({ title, description }: H3WithSpanProps) => {
  const fragment = document.createDocumentFragment()

  const span = Text({ tagName: 'span', children: description, classname: styles.span })

  fragment.append(`${title}: `, span)

  const h3 = Text({ tagName: 'h3', children: fragment, classname: styles.h3 })

  return h3
}
