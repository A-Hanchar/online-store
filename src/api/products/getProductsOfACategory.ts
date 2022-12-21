import { IProductsResponse } from 'interfaces'
import { products } from './endpoints'

export const getProductsOfACategory = (categoryName: string) =>
  fetch(`${products}/category/${categoryName}`).then((response): Promise<IProductsResponse> => response.json())
