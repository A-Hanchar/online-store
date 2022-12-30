import { Button } from 'components/Button'
import { createElementWithClassName, localStoragePromoCodeInstanse } from 'helpers'
import { ActivePromoCodeProps } from './types'
import styles from './styles.css'

export const ActivePromoCode = ({ callbackList, description, sale, id }: ActivePromoCodeProps) => {
  const li = createElementWithClassName({ tagName: 'li', classname: styles.li })

  const handleClick = () => {
    localStoragePromoCodeInstanse.removePromoCodeId(id)

    callbackList.forEach((callback) => callback())
  }

  const button = Button({ children: 'x', classname: styles.removeButton, onclick: handleClick })

  li.append(`${description}: ${sale}%`, button)

  return li
}
