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
    const productsIds = this.getValue<number>(LOCAL_STORAGE_KEY.PRODUCTS_IDS)

    if (productsIds.includes(id)) {
      return
    }

    productsIds.push(id)

    localStorage.setItem(LOCAL_STORAGE_KEY.PRODUCTS_IDS, JSON.stringify(productsIds))
    this.updateBasket()
  }

  getProductsIds() {
    return this.getValue<number>(LOCAL_STORAGE_KEY.PRODUCTS_IDS)
  }
}

export const localStorageInstanse = new LocalStorageInstanse()
