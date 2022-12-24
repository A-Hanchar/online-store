import { products } from 'mock/products'
import { Text } from 'components/Text'
import styles from './styles.css'
import { createElementWithClassName, getPricesByDiscount } from 'helpers'

export const Price = (product: typeof products[0]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const arr = []

  for (const key in product) {
    switch (key) {
      case 'discountPercentage':
        arr.push(product[key])
        break
      case 'price':
        arr.push(product[key])
        break
    }
  }

  const fullPrice = Text({ tagName: 'span', text: arr[0]!.toString(), classname: styles.fullPrice })

  const priceWithDiscount = Text({
    tagName: 'span',
    text: getPricesByDiscount(arr[0]!, arr[1]!).priceWithDiscount.toString().slice(0, -2),
    classname: styles.priceWithDiscount,
  })

  container.append(priceWithDiscount, fullPrice)

  return container
}
