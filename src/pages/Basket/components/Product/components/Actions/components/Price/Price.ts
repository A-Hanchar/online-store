import { createElementWithClassName, getPricesByDiscount, localStorageInstanse } from 'helpers'
import { CURRENCY } from 'types'
import { H3WithSpan } from '../../../H3WithSpan'
import { Priceprops } from './types'

export const Price = ({ productId, callbackList }: Priceprops) => {
  const wrapper = createElementWithClassName({ tagName: 'div' })

  const renderPrice = () => {
    wrapper.replaceChildren()

    const product = localStorageInstanse.getProductById(productId)

    if (product) {
      const { price, discount, count } = product

      const totalPrice = (getPricesByDiscount(price, discount).priceWithDiscount * count).toFixed(2)

      wrapper.append(
        H3WithSpan({
          title: 'Total',
          description: `${CURRENCY.DOLLAR}${totalPrice}`,
        }),
      )
    }
  }

  callbackList.push(renderPrice)

  return wrapper
}
