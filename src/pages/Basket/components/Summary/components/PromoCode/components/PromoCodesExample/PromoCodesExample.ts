import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { promoCodes } from 'mock/promoCodes'

import styles from './styles.css'

export const PromoCodesExample = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  promoCodes.forEach(({ id }) => {
    wrapper.append(Text({ tagName: 'span', text: id, classname: styles.promoCode }))
  })

  return wrapper
}
