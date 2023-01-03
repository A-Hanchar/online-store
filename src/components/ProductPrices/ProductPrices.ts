import { createElementWithClassName, getPricesByDiscount } from 'helpers'
import { ProductPricesProps } from './types'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Rating } from 'components/Rating'
import { CURRENCY } from 'enums'

export const ProductPrices = ({ price, discountPercentage, rating }: ProductPricesProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const priceWrapper = createElementWithClassName({ tagName: 'div', classname: styles.prices })

  wrapper.append(priceWrapper, Rating({ rating }))

  const { price: oldPrice, priceWithDiscount: currentPrice } = getPricesByDiscount(price, discountPercentage)

  priceWrapper.append(
    Text({
      tagName: 'span',
      text: `${CURRENCY.DOLLAR}${currentPrice.toFixed(2)}`,
      classname: styles.new,
    }),
    Text({ tagName: 'span', text: `${CURRENCY.DOLLAR}${oldPrice.toFixed(2)}`, classname: styles.old }),
  )

  return wrapper
}
