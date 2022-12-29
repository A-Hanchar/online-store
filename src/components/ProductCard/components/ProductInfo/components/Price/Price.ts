import { createElementWithClassName, getPricesByDiscount } from 'helpers'
import { PriceProps } from './types'
import styles from './styles.css'
import { Text } from 'components/Text'
import { CURRENCY } from 'types'
import { Rating } from 'components/Rating'

export const Price = ({ price, discountPercentage, rating }: PriceProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const priceWrapper = createElementWithClassName({ tagName: 'div', classname: styles.prices })

  wrapper.append(priceWrapper)

  if (rating) {
    wrapper.append(priceWrapper, Rating({ rating }))
  }

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
