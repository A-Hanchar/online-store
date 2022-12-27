import { SortingKeys } from 'interfaces'

export type SortElement = {
  key: SortingKeys
  title: string
}

export type SortElementProps = SortElement & {
  onClick?: () => void
}
