import { AllProductsRequestParams } from './types'
import { IAllProductsResponse } from 'interfaces'
import { products } from './endpoints'

export const getAllProducts = ({ page, searchParams: { limit = 20 } }: AllProductsRequestParams) => {
  const skip = page * limit

  const requestUrl = `${products}?limit=${limit}&skip=${skip}`

  // fetch(this.makeUrl(options, endpoint), { method })
  //     .then(this.errorHandler)
  //     .then((res): Promise<DataCallbackType> => res.json())
  //     .then((data) => callback(data))
  //     .catch((err) => console.error(err))

  return fetch(requestUrl).then((response): Promise<IAllProductsResponse> => response.json())

  // const response: Promise<IAllProductsResponse> = await fetch(requestUrl)

  // console.log(response)

  // const responseData = await response.json() // as IAllProductsRespons

  // return responseData
}
