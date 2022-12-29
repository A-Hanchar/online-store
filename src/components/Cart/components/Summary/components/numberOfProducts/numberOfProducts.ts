import { Text } from 'components/Text'
import styles from './styles.css'
import { localStorageInstanse } from 'helpers'

export const numberOfProducts = function () {
  return Text({
    tagName: 'h3',
    text: `Products: ${localStorageInstanse.getProductsCount()}`,
    classname: styles.products,
  })
}
