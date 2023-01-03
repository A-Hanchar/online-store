import { Text } from 'components/Text'
import { localStorageInstanse } from 'helpers'

import styles from './styles.css'
import { CountElementsProps } from './types'

export const CountElements = ({ productId, callbackList }: CountElementsProps) => {
  const span = Text({ tagName: 'span', classname: styles.count })

  const renderText = () => {
    const product = localStorageInstanse.getProductById(productId)

    if (product) {
      const { count } = product

      span.innerText = String(count)
    }
  }

  renderText()

  callbackList.push(renderText)

  return span
}
