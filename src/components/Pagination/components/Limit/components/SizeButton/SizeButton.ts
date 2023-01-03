import { Button } from 'components/Button'
import styles from './styles.css'
import commonStyles from '../commonStyles.css'
import { SizeButtonProps } from './types'
import { toggleClassnameToElement, urlInstanse } from 'helpers'
import { PAGE_SIZE } from 'enums'

export const SizeButton = ({ SizeList }: SizeButtonProps) => {
  const handleButtonClick = () => {
    toggleClassnameToElement({ element: SizeList, classname: commonStyles.hidden })
    toggleClassnameToElement({ element: SizeList, classname: commonStyles.flex })
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
