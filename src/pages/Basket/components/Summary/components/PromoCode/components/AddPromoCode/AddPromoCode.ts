import { Button } from 'components/Button'
import { AddPromoCodeProps } from './types'
import styles from './styles.css'
import { localStoragePromoCodeInstanse } from 'helpers'

export const AddPromoCode = ({ description, callbackList, sale, id, clearWrapper }: AddPromoCodeProps) => {
  const handleClick = () => {
    localStoragePromoCodeInstanse.setPromoCode({ id, description, sale })

    clearWrapper()

    callbackList.forEach((callback) => callback())
  }

  const button = Button({ children: `${description} - ${sale}%`, classname: styles.button, onclick: handleClick })

  return button
}
