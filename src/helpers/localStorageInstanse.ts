import { Basket } from 'components/Basket'
import { DATA_ATTRIBUTE, LOCAL_STORAGE_KEY } from 'types'

class LocalStorageInstanse {
  BasketElement: HTMLAnchorElement
  constructor() {
    this.BasketElement = this.createBasketElement()
  }

  createBasketElement() {
    const basket = Basket()
    const productsIds = this.getProductsIds()

    basket.setAttribute(DATA_ATTRIBUTE.DATA_BASKET_COUNT_ITEMS, String(productsIds.length))

    return basket
  }

  updateBasket() {
    this.setBasketCountItems()
  }

  setBasketCountItems() {
    const productsIds = this.getProductsIds()

    this.BasketElement.setAttribute(DATA_ATTRIBUTE.DATA_BASKET_COUNT_ITEMS, String(productsIds.length))
  }

  getValue<T>(key: LOCAL_STORAGE_KEY): T[] {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
  }

  setProductId(id: number) {
    const productsIds = this.getProductsIds()

    if (this.hasProductId(id)) {
      return
    }

    productsIds.push(id)

    localStorage.setItem(LOCAL_STORAGE_KEY.PRODUCTS_IDS, JSON.stringify(productsIds))
    this.updateBasket()
  }

  removeProductId(id: number) {
    const productsIds = this.getProductsIds().filter((checkedId) => checkedId !== id)

    localStorage.setItem(LOCAL_STORAGE_KEY.PRODUCTS_IDS, JSON.stringify(productsIds))
    this.updateBasket()

    if (!productsIds.length) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.PRODUCTS_IDS)
    }
  }

  hasProductId(id: number) {
    const productsIds = this.getProductsIds()

    return productsIds.includes(id)
  }

  getProductsIds() {
    return this.getValue<number>(LOCAL_STORAGE_KEY.PRODUCTS_IDS)
  }
}

export const localStorageInstanse = new LocalStorageInstanse()
