import { createElementWithClassName } from 'helpers'
import { IProduct } from 'interfaces'
import { Actions } from './components/Actions'
import { Description } from './components/Description'
import { ImageBlock } from './components/ImageBlock'
import styles from './styles.css'

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
}: IProduct) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    ImageBlock({ thumbnail, title }),
    Description({ title, brand, category, description, discountPercentage, price, rating, stock }),
    Actions({ stock, productId: id, productWrapper: wrapper }),
  )

  return wrapper
}
