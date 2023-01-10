import { Image } from 'components/Image'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'

import styles from './styles.css'
import { ImageBlockProps } from './types'

export const ImageBlock = ({ thumbnail, title, currentNumber }: ImageBlockProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    Image({ src: thumbnail, alt: title, classname: styles.image }),
    Text({ tagName: 'span', text: String(currentNumber), classname: styles.currentNumber }),
  )

  return wrapper
}
