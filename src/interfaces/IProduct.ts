import { Category } from './Category'

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: Category
  thumbnail: string
  images: string[]
}

export type RangeKeys = keyof Pick<IProduct, 'price' | 'stock'>

export type LikeKeys = keyof Pick<IProduct, 'title'>

export type SortingKeys = keyof Pick<IProduct, 'price' | 'rating' | 'title' | 'discountPercentage'>

export type ProductEqualKeys = keyof Pick<IProduct, 'category' | 'brand'>
export type EqualKeys = ProductEqualKeys | 'appearance'

export enum SEARCH_PARAMS {
  SORT_BY = 'sort_by',
}

export enum SORTING_TYPE {
  ASC = 'asc',
  DESC = 'desc',
}

export type SearchKeys = RangeKeys | LikeKeys | SortingKeys | EqualKeys | SEARCH_PARAMS

export type FilterCheckboxKeys = keyof Pick<IProduct, 'category' | 'brand'>
