import { dataBasketCountItems } from 'components/Header/components/Basket/constants'

export enum LOCAL_STORAGE_KEY {
  PRODUCTS_IDS = 'PRODUCTS_IDS',
}

class LocalStorageInstanse {
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

  updateBasket() {
    const basket = document.querySelector(`a#basket[${dataBasketCountItems}]`)

    if (basket) {
      const productsIds = this.getProductsIds()

      basket.setAttribute(dataBasketCountItems, String(productsIds.length))
    }
  }
}

export const localStorageInstanse = new LocalStorageInstanse()
