import { Button } from 'components/Button'
import { Text } from 'components/Text'
import {
  createElementWithClassName,
  getPricesByDiscount,
  localStorageInstanse,
  localStoragePromoCodeInstanse,
} from 'helpers'
import { CURRENCY } from 'types'
import styles from './styles.css'
import { Totalprops } from './types'

export const Total = ({ callbackList }: Totalprops) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const totalText = Text({ tagName: 'p', classname: styles.total })
  const button = Button({ children: 'Buy', classname: styles.button })

  const renderTotaltext = () => {
    const productsPrice = localStorageInstanse.getProductsPrice()
    const promocodeSales = localStoragePromoCodeInstanse.getSumOfSale()

    totalText.innerText = `Total: ${CURRENCY.DOLLAR}${getPricesByDiscount(
      Number(productsPrice),
      promocodeSales,
    ).priceWithDiscount.toFixed(2)}`
  }

  wrapper.append(totalText, button)

  callbackList.push(renderTotaltext)

  return wrapper
}
