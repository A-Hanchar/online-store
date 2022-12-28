import { Basket } from 'components/Basket'
import { CURRENCY, DATA_ATTRIBUTE, LOCAL_STORAGE_KEY } from 'types'
import { createElementWithClassName } from './createElementWithClassName'
import { getPricesByDiscount } from './getPricesByDiscount'

type LocalStorageProduct = {
  id: number
  count: number
  price: number
  discount: number
}

class LocalStorageInstanse {
  getValue<T>(key: LOCAL_STORAGE_KEY): T[] {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as T[]
  }
}

class ProductsInstanse extends LocalStorageInstanse {
  getProductsCount() {
    const products = this.getProducts()

    return products.reduce((prev, current) => prev + current.count, 0)
  }

  getProductsPrice() {
    const products = this.getProducts()

    return products
      .reduce((prev, current) => prev + getPricesByDiscount(current.price, current.discount).priceWithDiscount, 0)
      .toFixed(2)
  }

  setProduct({ id, ...productProps }: LocalStorageProduct) {
    if (this.hasProductId(id)) {
      return
    }

    const products = this.getProducts()
    products.push({ id, ...productProps })

    localStorage.setItem(LOCAL_STORAGE_KEY.PRODUCTS, JSON.stringify(products))
  }

  removeProductId(id: number) {
    const products = this.getProducts().filter(({ id: checkedId }) => checkedId !== id)

    localStorage.setItem(LOCAL_STORAGE_KEY.PRODUCTS, JSON.stringify(products))

    if (!products.length) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.PRODUCTS)
    }
  }

  hasProductId(id: number) {
    const productsIds = this.getProducts().map(({ id }) => id)

    return productsIds.includes(id)
  }

  getProducts() {
    return this.getValue<LocalStorageProduct>(LOCAL_STORAGE_KEY.PRODUCTS)
  }
}

class BasketInstance extends ProductsInstanse {
  BasketElement: HTMLAnchorElement
  basketText: HTMLParagraphElement

  constructor() {
    super()

    this.basketText = this.createBasketText()
    this.BasketElement = this.createBasketElement()
  }

  createBasketElement() {
    const basket = Basket()

    basket.setAttribute(DATA_ATTRIBUTE.DATA_BASKET_COUNT_ITEMS, String(this.getProductsCount()))
    basket.setAttribute(DATA_ATTRIBUTE.DATA_BASKET_PRICE_ITEMS, String(this.getProductsPrice()))

    basket.append(this.basketText)

    return basket
  }

  createBasketText() {
    const p = createElementWithClassName({ tagName: 'p' })
    const span = createElementWithClassName({ tagName: 'span' })

    span.append(`(${CURRENCY.DOLLAR}${this.getProductsPrice()})`)
    p.append('Basket', span)

    p.style.margin = '0'

    return p
  }

  updateBasket() {
    this.setBasketCountItems()

    const basketTextSpan = this.basketText.querySelector('span')

    if (basketTextSpan) {
      basketTextSpan.innerText = `(${CURRENCY.DOLLAR}${this.getProductsPrice()})`
    }
  }

  setBasketCountItems() {
    this.BasketElement.setAttribute(DATA_ATTRIBUTE.DATA_BASKET_COUNT_ITEMS, String(this.getProductsCount()))
  }
}

export const localStorageInstanse = new BasketInstance()
