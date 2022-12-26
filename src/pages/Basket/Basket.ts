import { products } from './../../mock/products'
import { Cart } from 'components/Cart'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(Cart(products[0]!))
  console.log(products[0])
  return fragment
}
