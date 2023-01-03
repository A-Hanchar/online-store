import { Image } from 'components/Image'
import { ProductImageProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { DATA_ATTRIBUTE } from 'enums'

export const ProductImage = ({ alt, src, discountPercentage, type = 'standart' }: ProductImageProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.productImage, styles[type]] })

  wrapper.setAttribute(DATA_ATTRIBUTE.DATA_DISCOUNT_PERCENTAGE, `${discountPercentage.toFixed(1)}%`)
  wrapper.append(Image({ alt, src }))

  return wrapper
}
