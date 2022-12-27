import { IProduct } from 'interfaces'
import { products } from './../../mock/products'
import { Cart } from 'components/Cart'
import { localStorageInstanse } from 'helpers'
import { LOCAL_STORAGE_KEY } from 'types'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  if (localStorage.getItem('PRODUCTS_IDS')) {
    const localArr: number[] = localStorageInstanse.getValue(LOCAL_STORAGE_KEY.PRODUCTS_IDS)
    const arr: IProduct[] = []

    localArr.forEach((e) =>
      products.forEach((el) => {
        if (el.id === e) {
          arr.push(el)
        }
      }),
    )

    fragment.append(Cart(arr))
  }

  return fragment
}
