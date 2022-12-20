import { Image } from 'components/Image'
import { ProductImageProps } from './types'
import styles from './styles.css'

export const ProductImage = ({ alt, src, discountPercentage }: ProductImageProps) => {
  const wrapper = document.createElement('div')
  wrapper.setAttribute('data-discountPercentage', `${discountPercentage.toFixed(1)}%`)
  styles.productImage && wrapper.classList.add(styles.productImage)

  wrapper.append(Image({ alt, src }))

  return wrapper
}
