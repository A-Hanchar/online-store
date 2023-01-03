import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { CardInputProps } from './types'
import { CardNumber } from './components/CardNumber'
import { CardDate } from './components/CardDate'
import { CardCVV } from './components/CardCVV'

export const CardInput = ({ validationInputs }: CardInputProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(CardNumber({ validationInputs }), CardDate({ validationInputs }), CardCVV({ validationInputs }))

  return wrapper
}
