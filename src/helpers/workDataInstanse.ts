import { IProduct } from 'interfaces'
import { products as productsList } from 'mock/products'

class WorkDataInstanse {
  products: IProduct[]

  constructor() {
    this.products = productsList
  }

  getAllProducts() {
    return this.products
  }

  getAllCategories() {
    return [...new Set(this.products.map(({ category }) => category))]
  }

  getProductsByCategory(categoryId: string) {
    return this.products.filter(({ category }) => category === categoryId)
  }

  getCountProductsOfCategory(categoryId: string) {
    return this.getProductsByCategory(categoryId).length
  }

  getAllBrands() {
    return [...new Set(this.products.map(({ brand }) => brand))]
  }

  getProductsByBrand(searchedBrand: string) {
    return this.products.filter(({ brand }) => brand === searchedBrand)
  }

  getCountProductsOfBrand(brand: string) {
    return this.getProductsByBrand(brand).length
  }
}

export const workDataInstanse = new WorkDataInstanse()
