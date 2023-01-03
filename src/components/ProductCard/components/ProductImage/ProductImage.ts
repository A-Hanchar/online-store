import { Image } from 'components/Image'

import { DATA_ATTRIBUTE } from 'enums'
import { createElementWithClassName } from 'helpers'

import styles from './styles.css'
import { ProductImageProps } from './types'

export const ProductImage = ({ alt, src, discountPercentage, type = 'standart' }: ProductImageProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.productImage, styles[type]] })

  wrapper.setAttribute(DATA_ATTRIBUTE.DATA_DISCOUNT_PERCENTAGE, `${discountPercentage.toFixed(1)}%`)
  wrapper.append(Image({ alt, src }))

  return wrapper
}
