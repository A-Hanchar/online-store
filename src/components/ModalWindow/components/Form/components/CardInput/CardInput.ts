import { CardLogo } from './../CardLogo/CardLogo'
import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'

export const CardInput = () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  // const cardNumber = Input({
  //   id: 'cardNumber',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Card number',
  //   // regExp: /^\d{16}$/,
  //   classname: styles.input,
  // })

  // const cardValid = Input({
  //   id: 'cardValid',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Valid Thru',
  //   // regExp: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/,
  //   classname: styles.input,
  // })

  // const cardCVV = Input({
  //   id: 'cardCVV',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Code',
  //   // regExp: /^\d{3}$/,
  //   classname: styles.input,
  // })

  // const cardLogo = CardLogo()

  // cardNumber.addEventListener('input', () => {
  //   switch (cardNumber.value) {
  //     case '2':
  //       cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
  //       break
  //     case '4':
  //       cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
  //       break
  //     case '5':
  //       cardLogo.src =
  //         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052'
  //       break
  //     default:
  //       cardLogo.src =
  //         'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
  //   }
  // })

  // cardValid.maxLength = 5

  // cardValid.addEventListener('input', () => {
  //   const arr = cardValid.value.split('')
  //   if (cardValid.value.length === 2) {
  //     if (arr.includes('/', 0)) {
  //       arr.splice(arr.indexOf('/'), 1)
  //     }
  //     arr.splice(2, 0, '/')
  //     cardValid.value = arr.join('')
  //   }
  // })

  const topContainer = document.createElement('div')
  styles.topContainer && topContainer.classList.add(styles.topContainer)
  topContainer.append(cardValid, cardCVV)

  const bottomContainer = document.createElement('div')
  styles.bottomContainer && bottomContainer.classList.add(styles.bottomContainer)
  bottomContainer.append(cardLogo, cardNumber)

  container.append(bottomContainer, topContainer)
  return container
}
