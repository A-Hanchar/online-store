import { Image } from 'components/Image'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Rating } from 'components/ProductCard/components/ProductInfo/components/Rating'

export const DescriptionItem = ({ title, category, brand, rating, thumbnail }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })

  const itemNumber = Text({ tagName: 'span', text: '1', classname: styles.itemNumber })
  const img = Image({ src: thumbnail, alt: title, classname: styles.img })
  const header = Text({ tagName: 'h3', text: title, classname: styles.header })
  const itemBrand = Text({ tagName: 'span', text: brand, classname: styles.brand })
  const itemCategory = Text({ tagName: 'span', text: category, classname: styles.category })
  const raiting = Rating({ rating })

  block.append(header, itemBrand, itemCategory, raiting)

  container.append(itemNumber, img, block)

  return container
}
