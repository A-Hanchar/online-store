import { createElementWithClassName, getPricesByDiscount, localStorageInstanse } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { QuantityOfItemProps } from './types'

export const QuantityOfItem = ({ id, stock, price, discountPercentage }: QuantityOfItemProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })

  const obj = localStorageInstanse.returnProduct(id)
  const { count: newCount, price: newPrice } = obj
  const priceForLocal = getPricesByDiscount(newPrice, discountPercentage)
  const priceForMinuse = getPricesByDiscount(price, discountPercentage)

  const stockItem = Text({ tagName: 'span', text: `Stock: ${stock}`, classname: styles.stock })
  const num = Text({ tagName: 'span', text: newCount, classname: styles.num })
  const priceItem = Text({
    tagName: 'span',
    text: `$${priceForLocal.priceWithDiscount.toFixed(2)}`,
    classname: styles.price,
  })

  const btnMin = Button({
    children: '-',
    classname: styles.btn,
    onclick: () => {
      if (+num.textContent! > 1) {
        num.textContent--
        localStorageInstanse.setCount(id, +num.textContent)
        priceItem.textContent = `$${(priceForLocal.priceWithDiscount -= priceForMinuse.priceWithDiscount).toFixed(2)}`
        localStorageInstanse.setPrice(id, priceForLocal.priceWithDiscount)
      }
    },
  })
  const btnPlus = Button({
    children: '+',
    classname: styles.btn,
    onclick: () => {
      if (+num.textContent! < stock) {
        num.textContent++
        localStorageInstanse.setCount(id, +num.textContent)
        priceItem.textContent = `$${(priceForLocal.priceWithDiscount += priceForMinuse.priceWithDiscount).toFixed(2)}`
        localStorageInstanse.setPrice(id, priceForLocal.priceWithDiscount)
      }
    },
  })

  block.append(btnMin, num, btnPlus)
  container.append(block, stockItem, priceItem)

  return container
}
