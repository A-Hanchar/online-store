import { Text } from 'components/Text'
import { H3WithSpanProps } from './types'
import styles from './styles.css'

export const H3WithSpan = ({ title, description }: H3WithSpanProps) => {
  const fragment = document.createDocumentFragment()

  const span = Text({ tagName: 'span', children: description, classname: styles.span })

  fragment.append(`${title}: `, span)

  const h3 = Text({ tagName: 'h3', children: fragment, classname: styles.h3 })

  return h3
}
