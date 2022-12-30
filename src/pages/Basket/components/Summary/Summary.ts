import { createElementWithClassName } from 'helpers'
import { Order } from './components/Order'
import { PromoCode } from './components/PromoCode'
import styles from './styles.css'
import { SummaryProps } from './types'

export const Summary = ({ callbackList }: SummaryProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(PromoCode({ callbackList }), Order({ callbackList }))

  return wrapper
}
