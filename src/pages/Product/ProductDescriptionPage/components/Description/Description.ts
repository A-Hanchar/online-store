import { ProductPrices } from 'components/ProductPrices'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'

import { ActionButtons } from './components/ActionButtons'
import styles from './styles.css'
import { DescriptionProps } from './types'

export const Description = ({
  category,
  stock,
  description,
  rating,
  discountPercentage,
  price,
  id,
  brand,
}: DescriptionProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    Text({ tagName: 'p', text: category, classname: styles.category }),
    Text({ tagName: 'p', text: brand, classname: styles.category }),
    Text({ tagName: 'p', text: `In stock: ${stock}`, classname: styles.category }),
    Text({ tagName: 'p', text: description, classname: styles.description }),
    ProductPrices({ rating, discountPercentage, price }),
    ActionButtons({ discountPercentage, id, price }),
  )

  return wrapper
}
