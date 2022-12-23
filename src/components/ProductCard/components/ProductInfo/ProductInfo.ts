import { ProductInfoProps } from './types'
import styles from './styles.css'
import { Text } from 'components/Text'
import { createElementWithClassName, getPricesByDiscount } from 'helpers'
import { CURRENCY } from 'types'

export const ProductInfo = ({ title, description, price, discountPercentage, category }: ProductInfoProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.productInfo })
  const pricesWrapper = createElementWithClassName({ tagName: 'div', classname: styles.prices })

  const { price: oldPrice, priceWithDiscount: currentPrice } = getPricesByDiscount(price, discountPercentage)

  pricesWrapper.append(
    Text({
      tagName: 'span',
      text: `${CURRENCY.DOLLAR}${currentPrice.toFixed(2)}`,
      classname: styles.new,
    }),
    Text({ tagName: 'span', text: `${CURRENCY.DOLLAR}${oldPrice.toFixed(2)}`, classname: styles.old }),
  )

  wrapper.append(
    Text({ tagName: 'h2', text: title, classname: styles.title }),
    Text({ tagName: 'p', text: category, classname: styles.category }),
    Text({ tagName: 'p', text: description, classname: styles.description }),
    pricesWrapper,
  )

  return wrapper
}
