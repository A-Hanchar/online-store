export type ActionsProps = {
  stock: number
  productId: number
  productWrapper: HTMLElement
  callbackList: Array<() => void>
}
