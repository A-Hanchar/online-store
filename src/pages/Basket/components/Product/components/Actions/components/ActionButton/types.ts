export type ActionButtonProps = {
  stock: number
  type: 'add' | 'remove'
  productId: number
  callbackList: Array<() => void>
  productWrapper: HTMLElement
}
