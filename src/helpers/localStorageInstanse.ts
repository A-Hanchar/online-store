import { Basket } from 'components/Basket'
import { CURRENCY, DATA_ATTRIBUTE, LOCAL_STORAGE_KEY, PromoCode } from 'types'
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
      .reduce(
        (prev, { price, discount, count }) => prev + getPricesByDiscount(price, discount).priceWithDiscount * count,
        0,
      )
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

  setProductCount(id: number, newCount: number) {
    const products = this.getProducts()

    const product = products.find((product) => product.id === id)

    if (product) {
      product.count = newCount
    }

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

  getProductById(id: number) {
    const products = this.getProducts()

    return products.find((product) => product.id === id)
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

class PromoCodeInstanse extends LocalStorageInstanse {
  setPromoCode({ id, ...promoCodeProps }: PromoCode) {
    if (this.hasPromoCodeById(id)) {
      return
    }

    const promoCodes = this.getPromoCodes()
    promoCodes.push({ id, ...promoCodeProps })

    localStorage.setItem(LOCAL_STORAGE_KEY.PROMO_CODES, JSON.stringify(promoCodes))
  }

  getPromoCodes() {
    return this.getValue<PromoCode>(LOCAL_STORAGE_KEY.PROMO_CODES)
  }

  hasPromoCodeById(id: string) {
    const promoCodeIds = this.getPromoCodes().map(({ id }) => id)

    return promoCodeIds.includes(id)
  }

  getSumOfSale() {
    const promoCodeSales = this.getPromoCodes().map(({ sale }) => sale)

    const sum = promoCodeSales.reduce((prev, current) => prev + current, 0)

    return sum > 100 ? 100 : sum
  }

  removePromoCodeId(id: string) {
    const promoCodes = this.getPromoCodes().filter(({ id: checkedId }) => checkedId !== id)

    localStorage.setItem(LOCAL_STORAGE_KEY.PROMO_CODES, JSON.stringify(promoCodes))

    if (!promoCodes.length) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.PROMO_CODES)
    }
  }
}

export const localStorageInstanse = new BasketInstance()
export const localStoragePromoCodeInstanse = new PromoCodeInstanse()
