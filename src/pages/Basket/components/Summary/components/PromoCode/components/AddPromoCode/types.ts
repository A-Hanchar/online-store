import { PromoCode } from 'types'

export type AddPromoCodeProps = PromoCode & {
  callbackList: Array<() => void>
  clearWrapper: () => void
}
