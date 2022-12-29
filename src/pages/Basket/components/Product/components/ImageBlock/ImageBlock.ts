import { Image } from 'components/Image'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { ImageBlockProps } from './types'

export const ImageBlock = ({ thumbnail, title }: ImageBlockProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(Image({ src: thumbnail, alt: title, classname: styles.image }))

  return wrapper
}
