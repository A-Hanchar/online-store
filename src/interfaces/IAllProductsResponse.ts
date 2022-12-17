import { IProduct } from './IProduct'

export interface IAllProductsResponse {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}
