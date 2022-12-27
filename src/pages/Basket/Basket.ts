import { IProduct } from 'interfaces'
import { products } from './../../mock/products'
import { Cart } from 'components/Cart'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  const localArr: number[] = Array.from(JSON.parse(localStorage.getItem('PRODUCTS_IDS')))
  const arr: IProduct[] = []

  localArr.forEach((e) =>
    products.forEach((el) => {
      if (el.id === e) {
        arr.push(el)
      }
    }),
  )

  fragment.append(Cart(arr))
  return fragment
}
