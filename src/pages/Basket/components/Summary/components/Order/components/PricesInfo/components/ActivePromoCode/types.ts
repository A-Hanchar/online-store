import { PromoCode } from 'types'

export type ActivePromoCodeProps = PromoCode & {
  callbackList: Array<() => void>
}
