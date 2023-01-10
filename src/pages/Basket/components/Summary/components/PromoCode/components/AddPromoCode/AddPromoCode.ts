import { Button } from 'components/Button'

import { localStoragePromoCodeInstanse } from 'helpers'

import styles from './styles.css'
import { AddPromoCodeProps } from './types'

export const AddPromoCode = ({ description, callbackList, sale, id, clearWrapper }: AddPromoCodeProps) => {
  const handleClick = () => {
    localStoragePromoCodeInstanse.setPromoCode({ id, description, sale })

    clearWrapper()

    callbackList.forEach((callback) => callback())
  }

  const button = Button({ children: `${description} - ${sale}%`, classname: styles.button, onclick: handleClick })

  return button
}
