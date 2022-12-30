import { Button } from 'components/Button'
import { PAGE_SIZE } from 'types'
import styles from './styles.css'
import commonStyles from '../commonStyles.css'
import { SizeButtonProps } from './types'
import { toggleClassnameToElement } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'

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
