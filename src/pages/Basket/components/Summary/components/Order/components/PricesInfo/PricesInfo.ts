import { Text } from 'components/Text'
import { CURRENCY } from 'enums'
import {
  addClassnameToElement,
  createElementWithClassName,
  localStorageInstanse,
  localStoragePromoCodeInstanse,
  removeClassnameToElement,
} from 'helpers'

import { ActivePromoCodes } from './components/ActivePromoCodes'
import styles from './styles.css'
import { PriceInfoProps } from './types'

export const PricesInfo = ({ callbackList }: PriceInfoProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const productCountText = Text({ tagName: 'p', classname: styles.text })
  const costText = Text({ tagName: 'p', classname: styles.text })

  wrapper.append(productCountText, costText, ActivePromoCodes({ callbackList }))

  const renderPriceInfo = () => {
    productCountText.innerText = `Products: ${localStorageInstanse.getProductsCount()}`
    costText.innerText = `Cost: ${CURRENCY.DOLLAR}${localStorageInstanse.getProductsPrice()}`

    const promoCodes = localStoragePromoCodeInstanse.getPromoCodes()

    promoCodes.length
      ? addClassnameToElement({ element: costText, classname: styles.through })
      : removeClassnameToElement({ element: costText, classname: styles.through })
  }

  callbackList.push(renderPriceInfo)

  return wrapper
}
