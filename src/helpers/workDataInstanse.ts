import { IProduct } from 'interfaces'
import { products as productsList } from 'mock/products'
import { SEARCH_PARAMS } from 'types'

class WorkDataInstanse {
  products: IProduct[]

  constructor() {
    this.products = productsList
  }

  getAllProducts() {
    return this.products
  }

  getAllElemntsByKey(key: SEARCH_PARAMS.BRAND | SEARCH_PARAMS.CATERORY) {
    return [...new Set(this.products.map((product) => product[key]))]
  }

  getProductsByKey(key: SEARCH_PARAMS.BRAND | SEARCH_PARAMS.CATERORY, value: string) {
    return this.products.filter((product) => product[key] === value)
  }

  getCountByKey(key: SEARCH_PARAMS.BRAND | SEARCH_PARAMS.CATERORY, value: string) {
    return this.getProductsByKey(key, value).length
  }

  getRange(key: SEARCH_PARAMS.STOCK | SEARCH_PARAMS.PRICE) {
    return {
      min: Math.min(...this.products.map((product) => product[key])),
      max: Math.max(...this.products.map((product) => product[key])),
    }
  }
}

export const workDataInstanse = new WorkDataInstanse()
