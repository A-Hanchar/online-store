import { SortElement } from '../SortElement/types'

export type SortingElementsProps = {
  elements: [SortElement, ...SortElement[]]
  onClick?: (title: string) => void
  classname?: string
}
