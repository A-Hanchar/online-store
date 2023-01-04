import {
  addClassnameToElement,
  createElementWithClassName,
  localStoragePromoCodeInstanse,
  removeClassnameToElement,
} from 'helpers'
import { promoCodes } from 'mocks/promoCodes'

import { AddPromoCode } from '../AddPromoCode'
import styles from './styles.css'
import { InputProps } from './types'

export const Input = ({ callbackList }: InputProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const input = createElementWithClassName({ tagName: 'input', classname: styles.input })
  input.placeholder = 'Promo Code'

  const buttonWrapper = createElementWithClassName({ tagName: 'div', classname: styles.buttonWrapper })

  const clearButtonWrapper = () => {
    buttonWrapper.replaceChildren()
    removeClassnameToElement({ element: buttonWrapper, classname: styles.withContent })
  }

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase()

    const promoCode = promoCodes.find(({ id }) => id.toLowerCase() === value)

    if (promoCode && !localStoragePromoCodeInstanse.hasPromoCodeById(promoCode.id)) {
      buttonWrapper.append(AddPromoCode({ callbackList, ...promoCode, clearWrapper: clearButtonWrapper }))
      addClassnameToElement({ element: buttonWrapper, classname: styles.withContent })

      return
    }

    clearButtonWrapper()
  })

  wrapper.append(input, buttonWrapper)

  return wrapper
}
