import { CardLogo } from './../CardLogo/CardLogo'
import { Input } from 'components/Input'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { SYMBOL } from 'types'

export const CardInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const cardNumber = Input({
    id: 'cardNumber',
    placeholder: 'Card number',
    classname: styles.input,
    dataset: 'number',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const cardValid = Input({
    id: 'cardValid',
    placeholder: 'Valid Thru',
    classname: styles.input,
    dataset: 'valid',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const cardCVV = Input({
    id: 'cardCVV',
    placeholder: 'Code',
    classname: styles.input,
    dataset: 'code',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const cardLogo = CardLogo()

  const num = cardNumber.querySelector('input')!

  num.addEventListener('input', () => {
    const value = num.value
    const firstLetter = value[0]

    switch (firstLetter) {
      case '2':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
        break
      case '4':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
        break
      case '5':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
        break
      default:
        cardLogo.src =
          'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
        break
    }
  })

  const val = cardValid.querySelector('input')

  val!.maxLength = 5

  val!.addEventListener('input', () => {
    const arr = val!.value.split('')
    if (val!.value.length === 2) {
      if (arr.includes(SYMBOL.SLASH, 0)) {
        arr.splice(arr.indexOf(SYMBOL.SLASH), 1)
      }
      arr.splice(2, 0, SYMBOL.SLASH)
      val!.value = arr.join('')
    }
  })

  const topContainer = createElementWithClassName({ tagName: 'div', classname: styles.topContainer })
  topContainer.append(cardValid, cardCVV)

  const bottomContainer = createElementWithClassName({ tagName: 'div', classname: styles.bottomContainer })
  bottomContainer.append(cardLogo, cardNumber)

  container.append(bottomContainer, topContainer)
  return container
}
