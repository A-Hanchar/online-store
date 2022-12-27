import { SORT_KEY } from 'types'

export type SortElement = {
  key: SORT_KEY
  title: string
}

export type SortElementProps = SortElement & {
  onClick?: (title: string) => void
}
