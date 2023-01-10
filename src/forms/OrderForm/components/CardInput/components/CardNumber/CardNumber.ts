import { Image } from 'components/Image'
import { Input } from 'components/Input'

import { createElementWithClassName } from 'helpers'

import { ErrorMessage } from '../../../ErrorMessage'
import commonStyles from '../commonStyles.css'
import styles from './styles.css'
import { CardNumberProps } from './types'

export const CardNumber = ({ validationInputs }: CardNumberProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const inputWrapper = createElementWithClassName({ tagName: 'div', classname: commonStyles.inputWrapper })
  const input = Input({
    placeholder: 'Card number',
    classname: commonStyles.input,
    maxLength: 16,
    type: 'number',
  })

  const cardLogo = Image({
    src: 'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none',
    alt: 'Logo Bank',
    classname: styles.cardLogo,
  })

  input.addEventListener('input', () => {
    const value = Number(input.value)

    input.value = String(value > -1 ? Math.abs(value) : 0)

    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength)
    }

    const firstLetter = input.value[0]

    switch (firstLetter) {
      case '2':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
        break
      case '4':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
        break
      case '5':
        cardLogo.src =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png'
        break
      default:
        cardLogo.src =
          'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
        break
    }
  })

  inputWrapper.append(input)
  wrapper.append(cardLogo, inputWrapper)

  validationInputs.push({
    input,
    validation: /^\d{16}$/,
    error: ErrorMessage(),
  })

  return wrapper
}
