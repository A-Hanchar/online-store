import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Price } from './components/Price'
import { Stock } from './components/Stock'
import { PriceBlockProps } from './types'
import { ActionButtons } from '../ActionButtons'

export const PriceBlock = ({ price, discountPercentage, rating, stock, id, brand, category }: PriceBlockProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const discount = discountPercentage
  container.append(
    Price({ price, discountPercentage, rating }),
    Stock({ stock }),
    ActionButtons({ id, brand, category, price, discount }),
  )

  return container
}
