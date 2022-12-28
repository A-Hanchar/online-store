import { IProduct } from 'interfaces'
import { products } from './../../mock/products'
import { Cart } from 'components/Cart'
import { localStorageInstanse } from 'helpers'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  if (localStorage.getItem('PRODUCTS')) {
    const localArr = localStorageInstanse.getProducts()

    const arr: IProduct[] = []

    localArr.forEach((e) =>
      products.forEach((el) => {
        if (el.id === e.id) {
          arr.push(el)
        }
      }),
    )

    fragment.append(Cart(arr))
  }

  return fragment
}
