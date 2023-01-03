import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { DescriptionProps } from './types'
import styles from './styles.css'
import { Rating } from 'components/Rating'
import { H3WithSpan } from '../H3WithSpan'
import { CURRENCY } from 'enums'

export const Description = ({
  title,
  description,
  category,
  brand,
  price,
  discountPercentage,
  rating,
  stock,
}: DescriptionProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const descriptionProduct = createElementWithClassName({ tagName: 'div', classname: styles.descriptionProduct })

  descriptionProduct.append(
    Text({ tagName: 'h2', text: title, classname: styles.title }),
    Text({ tagName: 'p', text: `${category} / ${brand}`, classname: styles.categoryBrand }),
    Text({ tagName: 'p', text: description, classname: styles.description }),
  )

  const additionDescription = createElementWithClassName({ tagName: 'div', classname: styles.additionDescription })

  const descriptionInNumbers = createElementWithClassName({ tagName: 'div', classname: styles.descriptionInNumbers })
  descriptionInNumbers.append(
    H3WithSpan({ title: 'Price', description: `${CURRENCY.DOLLAR}${price}` }),
    H3WithSpan({ title: 'Discount', description: `${discountPercentage}%` }),
    H3WithSpan({ title: 'In Stock', description: `${stock}` }),
  )

  additionDescription.append(descriptionInNumbers, Rating({ rating }))

  wrapper.append(descriptionProduct, additionDescription)

  return wrapper
}
