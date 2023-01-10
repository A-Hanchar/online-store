import { createElementWithClassName } from 'helpers'

import { CardCVV } from './components/CardCVV'
import { CardDate } from './components/CardDate'
import { CardNumber } from './components/CardNumber'
import styles from './styles.css'
import { CardInputProps } from './types'

export const CardInput = ({ validationInputs }: CardInputProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(CardNumber({ validationInputs }), CardDate({ validationInputs }), CardCVV({ validationInputs }))

  return wrapper
}
