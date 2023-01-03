import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { BlockOfProductDescription } from '../BlockOfProductDescription'
import { DescriptionBlockProps } from './types'
import { PriceBlock } from './PriceBlock'

export const DescriptionBlock = ({
  description,
  price,
  discountPercentage,
  rating,
  stock,
  id,
  brand,
  category,
}: DescriptionBlockProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })
  block.append(
    BlockOfProductDescription('Brand', brand),
    BlockOfProductDescription('Category', category),
    BlockOfProductDescription('Description', description),
  )
  container.append(block, PriceBlock({ price, discountPercentage, rating, stock, id, brand, category }))

  return container
}
