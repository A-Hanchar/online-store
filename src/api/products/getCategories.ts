import { Categories } from 'interfaces'
import { products } from './endpoints'

export const getCategories = () =>
  fetch(`${products}/categories`).then((response): Promise<Categories[]> => response.json())
