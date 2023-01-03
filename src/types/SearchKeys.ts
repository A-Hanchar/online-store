import { SEARCH_PARAMS } from 'enums'
import { IProduct } from 'interfaces'

export type RangeKeys = keyof Pick<IProduct, 'price' | 'stock'>

export type LikeKeys = keyof Pick<IProduct, 'title'>

export type SortingKeys = keyof Pick<IProduct, 'price' | 'rating' | 'title' | 'discountPercentage'>

export type ProductEqualKeys = keyof Pick<IProduct, 'category' | 'brand'>
export type EqualKeys = ProductEqualKeys | 'appearance'

export type PaginationKeys = 'total' | 'size' | 'page'

export type FilterCheckboxKeys = keyof Pick<IProduct, 'category' | 'brand'>

export type SearchKeys = RangeKeys | LikeKeys | SortingKeys | EqualKeys | SEARCH_PARAMS
