import { Image } from 'components/Image'
import { ProductImageProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'

export const ProductImage = ({ alt, src }: ProductImageProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.productImage })

  wrapper.append(Image({ alt, src }))

  return wrapper
}
