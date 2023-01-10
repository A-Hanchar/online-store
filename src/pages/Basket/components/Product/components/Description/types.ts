import { Category } from 'types'

export type DescriptionProps = {
  title: string
  description: string
  price: number
  discountPercentage: number
  brand: string
  category: Category
  rating: number
  stock: number
}
