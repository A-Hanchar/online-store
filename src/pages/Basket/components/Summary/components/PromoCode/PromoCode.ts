import { createElementWithClassName } from 'helpers'

import { Input } from './components/Input'
import { PromoCodesExample } from './components/PromoCodesExample'
import styles from './styles.css'
import { PromoCodeProps } from './types'

export const PromoCode = ({ callbackList }: PromoCodeProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(Input({ callbackList }), PromoCodesExample())

  return wrapper
}
