import { capitalizeText, createElementWithClassName } from 'helpers'
import { IProduct } from 'interfaces'
import styles from './styles.css'
import { Images } from './components/Images'
import { Text } from 'components/Text'
import { Description } from './components/Description'

export const ProductDescriptionPage = ({
  title,
  description,
  price,
  discountPercentage,
  category,
  id,
  brand,
  stock,
  rating,
  thumbnail,
  images,
}: IProduct) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    Images({ thumbnail, images }),
    Text({ tagName: 'h1', text: capitalizeText(title), classname: styles.title }),
    Description({ category, description, discountPercentage, price, rating, stock, id, brand }),
  )

  return wrapper
}
