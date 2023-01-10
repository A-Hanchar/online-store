import { createElementWithClassName } from 'helpers'

import { Actions } from './components/Actions'
import { Description } from './components/Description'
import { ImageBlock } from './components/ImageBlock'
import styles from './styles.css'
import { ProductProps } from './types'

export const Product = ({
  thumbnail,
  title,
  rating,
  brand,
  category,
  description,
  discountPercentage,
  price,
  stock,
  id,
  callbackList,
  currentNumber,
}: ProductProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    ImageBlock({ thumbnail, title, currentNumber }),
    Description({ title, brand, category, description, discountPercentage, price, rating, stock }),
    Actions({ stock, productId: id, productWrapper: wrapper, callbackList }),
  )

  return wrapper
}
