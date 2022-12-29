import { IProduct } from 'interfaces'

export type ProductProps = IProduct & {
  callbackList: Array<() => void>
}
