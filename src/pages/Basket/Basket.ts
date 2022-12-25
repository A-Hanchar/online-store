import { products } from './../../mock/products'
import { Cart } from 'components/Cart'
import styles from './styles.css'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(Cart(products[0]!))

  return fragment
}
