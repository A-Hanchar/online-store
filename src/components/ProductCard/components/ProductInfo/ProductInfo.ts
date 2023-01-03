import { ProductInfoProps } from './types'
import styles from './styles.css'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { ProductPrices } from 'components/ProductPrices'

export const ProductInfo = ({
  title,
  description,
  price,
  discountPercentage,
  category,
  rating,
  stock,
}: ProductInfoProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.productInfo })

  wrapper.append(
    Text({ tagName: 'h2', text: title, classname: styles.title }),
    Text({ tagName: 'p', text: category, classname: styles.category }),
    Text({ tagName: 'p', text: `In stock: ${stock}`, classname: styles.category }),
    Text({ tagName: 'p', text: description, classname: styles.description }),
    ProductPrices({ price, discountPercentage, rating }),
  )

  return wrapper
}
