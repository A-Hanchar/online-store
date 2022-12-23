import { CardLogo } from './../CardLogo/CardLogo'
import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'
import { createElementWithClassName } from 'helpers'

export const CardInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const cardNumber = Input({
    id: 'cardNumber',
    type: INPUT_TYPES.text,
    placeholder: 'Card number',
    classname: styles.input,
    dataset: 'number',
    container: true,
  })

  const cardValid = Input({
    id: 'cardValid',
    type: INPUT_TYPES.text,
    placeholder: 'Valid Thru',
    classname: styles.input,
    dataset: 'valid',
    container: true,
  })

  const cardCVV = Input({
    id: 'cardCVV',
    type: INPUT_TYPES.text,
    placeholder: 'Code',
    classname: styles.input,
    dataset: 'code',
    container: true,
  })

  const cardLogo = CardLogo()

  const num = cardNumber.querySelector('input')

  num!.addEventListener('input', () => {
    cardLogo.src =
      'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
    if (num!.value.startsWith('2')) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
    }
    if (num!.value.startsWith('4')) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
    }
    if (num!.value.startsWith('5')) {
      cardLogo.src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052'
    }
  })

  const val = cardValid.querySelector('input')

  val!.maxLength = 5

  val!.addEventListener('input', () => {
    const arr = val!.value.split('')
    if (val!.value.length === 2) {
      if (arr.includes('/', 0)) {
        arr.splice(arr.indexOf('/'), 1)
      }
      arr.splice(2, 0, '/')
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
