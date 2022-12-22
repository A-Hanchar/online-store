import { Image } from 'components/Image'
import { ProductImageProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'

export const ProductImage = ({ alt, src, discountPercentage }: ProductImageProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.productImage })

  wrapper.setAttribute('data-discount-percentage', `${discountPercentage.toFixed(1)}%`)
  wrapper.append(Image({ alt, src }))

  return wrapper
}
