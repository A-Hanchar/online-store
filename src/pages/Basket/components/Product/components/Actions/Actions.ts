import { createElementWithClassName } from 'helpers'
import { ActionsProps } from './types'
import styles from './styles.css'
import { ActionButton } from './components/ActionButton'
import { CountElements } from './components/CountElements'
import { Price } from './components/Price'

export const Actions = ({ stock, productId, productWrapper, callbackList }: ActionsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const buttonsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.buttonsWrapper })

  buttonsWrapper.append(
    ActionButton({ stock, productId, type: 'remove', callbackList, productWrapper }),
    CountElements({ productId, callbackList }),
    ActionButton({ stock, productId, type: 'add', callbackList, productWrapper }),
  )

  wrapper.append(buttonsWrapper, Price({ productId, callbackList }))

  return wrapper
}
