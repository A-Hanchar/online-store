import { Text } from 'components/Text'
import { createElementWithClassName, localStoragePromoCodeInstanse } from 'helpers'

import { ActivePromoCode } from '../ActivePromoCode'
import styles from './styles.css'
import { ActivePromoCodesProps } from './types'

export const ActivePromoCodes = ({ callbackList }: ActivePromoCodesProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
  const ul = createElementWithClassName({ tagName: 'ul', classname: styles.list })

  const title = Text({ tagName: 'p', text: 'Applyed Promo Codes: ', classname: styles.title })
  const totalPromocodeSale = Text({ tagName: 'span' })

  title.append(totalPromocodeSale)

  const renderListItems = () => {
    wrapper.replaceChildren()

    const promoCodes = localStoragePromoCodeInstanse.getPromoCodes()

    if (promoCodes.length) {
      wrapper.append(title, ul)

      ul.replaceChildren()

      totalPromocodeSale.innerText = `${localStoragePromoCodeInstanse.getSumOfSale()}%`

      promoCodes.forEach((promoCode) => {
        ul.append(ActivePromoCode({ callbackList, ...promoCode }))
      })
    }
  }

  callbackList.push(renderListItems)

  return wrapper
}
