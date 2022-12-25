import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { createBlockOfProductDescription } from '../CreateBlockOfProductDescription'
import { DescriptionBlockProps } from './types'
import { PriceBlock } from './PriceBlock'

export const DescriptionBlock = ({
  brand,
  category,
  description,
  price,
  discountPercentage,
  rating,
  stock,
}: DescriptionBlockProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })
  block.append(
    createBlockOfProductDescription('Brand', brand),
    createBlockOfProductDescription('Category', category),
    createBlockOfProductDescription('Description', description),
  )
  container.append(block, PriceBlock({ price, discountPercentage, rating, stock }))

  return container
}
