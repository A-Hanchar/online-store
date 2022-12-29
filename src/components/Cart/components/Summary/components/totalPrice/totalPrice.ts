import { Text } from 'components/Text'
import styles from './styles.css'
import { localStorageInstanse } from 'helpers'

export const totalPrice = function () {
  return Text({
    tagName: 'h3',
    text: `Total: $${localStorageInstanse.getProductsPrice()}`,
    classname: styles.price,
  })
}
