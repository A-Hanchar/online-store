import { SORT_TYPE, SYMBOL } from 'enums'
import { IProduct } from 'interfaces'
import { products as productsList } from 'mocks/products'
import { FilterCheckboxKeys, LikeKeys, ProductEqualKeys, RangeKeys, SortingKeys } from 'types'

import { urlInstanse } from './urlInstanse'

type ProductFilter =
  | {
      type: 'like'
      key: LikeKeys
    }
  | {
      type: 'equal'
      key: ProductEqualKeys
    }

class ProductsInstanse {
  products: IProduct[]

  constructor() {
    this.products = productsList
  }

  setInitialProducts() {
    this.products = productsList
  }

  getAllProducts() {
    return this.products
  }

  getUniqElemntsByKey(key: FilterCheckboxKeys) {
    return [...new Set(this.products.map((product) => product[key]))]
  }

  getProductsByKey(key: FilterCheckboxKeys, value: string) {
    return this.products.filter((product) => product[key] === value)
  }

  getCurrentRange(key: RangeKeys) {
    const { min, max } = this.getRange(key)

    const productsByKey = this.products.map((product) => product[key])

    const currentMin = Math.min(...productsByKey)
    const currentMax = Math.max(...productsByKey)

    return {
      min: currentMin === Infinity ? min : currentMin,
      max: currentMax === -Infinity ? max : currentMax,
    }
  }

  getRange(key: RangeKeys) {
    const productsByKey = productsList.map((product) => product[key])

    return {
      min: Math.min(...productsByKey),
      max: Math.max(...productsByKey),
    }
  }
}

class ProductsFilters extends ProductsInstanse {
  productFilters: ProductFilter[]
  productsRangeKeys: RangeKeys[]
  sortParams?: {
    key: SortingKeys
    sortingType: SORT_TYPE
  }

  constructor() {
    super()

    this.productFilters = []
    this.productsRangeKeys = []
  }

  addProductFilter(filter: ProductFilter) {
    this.productFilters.push(filter)
  }

  addProductRangeFilter(key: RangeKeys) {
    this.productsRangeKeys.push(key)
  }

  updateProductsByFilters() {
    this.setInitialProducts()

    this.productFilters.forEach(({ key, type }) => {
      if (type === 'equal') {
        const param = urlInstanse.getQueryParam(key)

        if (param) {
          const splitedParam = param.split(SYMBOL.COMMA)

          this.products = this.products.filter((product) => splitedParam.includes(product[key]))
        }
      }

      if (type === 'like') {
        const param = urlInstanse.getLikeParam(key)

        if (param) {
          this.products = this.products.filter((product) => product[key].toLowerCase().includes(param.toLowerCase()))
        }
      }
    })

    this.sortProducts()
  }

  updateProductsWithRange() {
    this.updateProductsByFilters()

    this.productsRangeKeys.forEach((key) => {
      const rangeParam = urlInstanse.getRangeParam(key)

      if (rangeParam) {
        const { start, end } = rangeParam

        this.products = this.products.filter((product) => product[key] >= start && product[key] <= end)
      }
    })
  }

  setSortingParams(key: SortingKeys, sortingType: SORT_TYPE) {
    this.sortParams = {
      key,
      sortingType,
    }
  }

  sortProducts() {
    if (!this.sortParams || this.products.length <= 1) {
      return
    }

    const { key, sortingType } = this.sortParams

    if (sortingType === SORT_TYPE.ASC) {
      this.products.sort((a, b) => {
        const valueA = a[key]
        const valueB = b[key]

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          if (valueA.toLowerCase() < valueB.toLowerCase()) {
            return -1
          }

          if (valueA.toLowerCase() > valueB.toLowerCase()) {
            return 1
          }
        }

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return valueA - valueB
        }

        return 0
      })
    }

    if (sortingType === SORT_TYPE.DESC) {
      this.products.sort((a, b) => {
        const valueA = a[key]
        const valueB = b[key]

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          if (valueA.toLowerCase() > valueB.toLowerCase()) {
            return -1
          }

          if (valueA.toLowerCase() < valueB.toLowerCase()) {
            return 1
          }
        }

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return valueB - valueA
        }

        return 0
      })
    }
  }
}

export const workDataInstanse = new ProductsFilters()
