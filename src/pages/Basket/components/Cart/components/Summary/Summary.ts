import { totalPrice } from './components/totalPrice'
import { numberOfProducts } from './components/numberOfProducts'
import { totalPriceWithDiscount } from './components/totalPriceWithDiscount'
import { createElementWithClassName } from 'helpers'
import { Text } from 'components/Text'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import styles from './styles.css'

export const Summary = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const blockApplied = createElementWithClassName({ tagName: 'div', classname: styles.block })
  const rsBlock = createElementWithClassName({ tagName: 'div', classname: styles.promoBlock })
  const epamBlock = createElementWithClassName({ tagName: 'div', classname: styles.promoBlock })

  const headerBlock = Text({ tagName: 'h4', text: 'Applied codes', classname: styles.headerBlock })
  const rs = Text({ tagName: 'span', text: 'Rolling Scopes School - 10% -', classname: styles.blockDescription })
  const epam = Text({ tagName: 'span', text: 'EPAM Systems - 10% -', classname: styles.blockDescription })
  const btnDropRS = Button({ children: 'DROP', classname: styles.btnDrop })
  const btnDropEPAM = Button({ children: 'DROP', classname: styles.btnDrop })

  const inputPromo = Input({ id: 'input-promo', placeholder: 'Enter promo code', classname: styles.input })
  const promoCode = Text({ tagName: 'span', text: 'Promo for test: "RS", "EPM"', classname: styles.products })
  const btnBuyNow = Button({ children: 'BUY NOW', classname: styles.btnBuyNow })

  blockApplied.append(headerBlock, rsBlock, epamBlock)
  rsBlock.append(rs, btnDropRS)
  epamBlock.append(epam, btnDropEPAM)

  container.append(
    numberOfProducts(),
    totalPrice(),
    totalPriceWithDiscount(),
    blockApplied,
    inputPromo,
    promoCode,
    btnBuyNow,
  )

  return container
}
