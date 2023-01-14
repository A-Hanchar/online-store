import { Button } from 'components/Button'

import { PAGE_SIZE } from 'enums'
import { toggleClassnameToElement, urlInstanse } from 'helpers'

import commonStyles from '../commonStyles.css'
import styles from './styles.css'
import { SizeButtonProps } from './types'

export const SizeButton = ({ SizeList }: SizeButtonProps) => {
  const handleButtonClick = () => {
    toggleClassnameToElement({ element: SizeList, classname: [commonStyles.hidden, commonStyles.flex] })
  }

  const button = Button({
    children: String(PAGE_SIZE.THREE),
    classname: styles.button,
    onclick: handleButtonClick,
  })

  const renderSizeText = () => {
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      return
    }

    const { size } = params

    button.innerText = String(size)
  }

  urlInstanse.addCallback(renderSizeText)

  return button
}
