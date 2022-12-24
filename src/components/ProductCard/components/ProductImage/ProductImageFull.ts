import { Image } from 'components/Image'
import { ProductImageProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { DATA_ATTRIBUTE } from 'types'

export const ProductImageFull = ({ alt, src, discountPercentage }: ProductImageProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.productImage, styles.full] })

  wrapper.setAttribute(DATA_ATTRIBUTE.DATA_DISCOUNT_PERCENTAGE, `${discountPercentage.toFixed(1)}%`)
  wrapper.append(Image({ alt, src }))

  return wrapper
}
