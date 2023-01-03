import { CURRENCY } from 'enums'
import { createElementWithClassName, getPricesByDiscount, localStorageInstanse } from 'helpers'

import { H3WithSpan } from '../../../H3WithSpan'
import { Priceprops } from './types'

export const Price = ({ productId, callbackList }: Priceprops) => {
  const wrapper = createElementWithClassName({ tagName: 'div' })

  const renderPrice = () => {
    const product = localStorageInstanse.getProductById(productId)

    if (product) {
      const { price, discount, count } = product

      const totalPrice = (getPricesByDiscount(price, discount).priceWithDiscount * count).toFixed(2)

      wrapper.replaceChildren(
        H3WithSpan({
          title: 'Total',
          description: `${CURRENCY.DOLLAR}${totalPrice}`,
        }),
      )
    }
  }

  callbackList.push(renderPrice)

  renderPrice()

  return wrapper
}
