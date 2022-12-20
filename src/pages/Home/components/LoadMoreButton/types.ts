import { IProductsResponse } from 'interfaces'

export type LoadMoreButtonProps = {
  loadMore: () => Promise<IProductsResponse>
  contentWrapper: HTMLDivElement
}
