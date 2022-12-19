import { AllProductsRequestParams } from './types'
import { IProductsResponse } from 'interfaces'
import { products } from './endpoints'

export const getAllProducts = ({ page, searchParams: { limit = 20 } }: AllProductsRequestParams) => {
  const skip = page * limit

  const requestUrl = `${products}?limit=${limit}&skip=${skip}`

  return fetch(requestUrl).then((response): Promise<IProductsResponse> => response.json())
}
