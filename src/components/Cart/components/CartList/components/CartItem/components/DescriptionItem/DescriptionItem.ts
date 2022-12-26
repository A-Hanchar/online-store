import { Image } from 'components/Image'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Rating } from 'components/ProductCard/components/ProductInfo/components/Rating'

export const DescriptionItem = ({ title, category, brand, rating, thumbnail }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const leftBlock = createElementWithClassName({ tagName: 'div', classname: styles.leftBlock })
  const centerBlock = createElementWithClassName({ tagName: 'div', classname: styles.centerBlock })

  const itemNumber = Text({ tagName: 'span', text: '1', classname: styles.itemNumber })
  const img = Image({ src: thumbnail, alt: title, classname: styles.img })
  const header = Text({ tagName: 'h3', text: title, classname: styles.header })
  const itemBrand = Text({ tagName: 'span', text: brand, classname: styles.brand })
  const itemCategory = Text({ tagName: 'span', text: category, classname: styles.category })
  const raiting = Rating({ rating })

  centerBlock.append(header, itemBrand, itemCategory, raiting)
  leftBlock.append(itemNumber, img)

  container.append(leftBlock, centerBlock)

  return container
}
