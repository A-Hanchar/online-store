import { createElementWithClassName } from 'helpers'
import { AppearanceButtonProps } from './types'
import styles from './styles.css'
import { Button } from 'components/Button'
import { urlInstanse } from 'helpers/urlInstanse'
import { Appearance } from 'types'

export const AppearanceButton = ({ type = 'standart' }: AppearanceButtonProps) => {
  let currentType = urlInstanse.getQueryParam<Appearance>('appearance') ?? type

  const standartContent = createElementWithClassName({ tagName: 'div', classname: styles.standart })
  const fullContent = createElementWithClassName({ tagName: 'div', classname: styles.full })

  const handleButtonClick = () => {
    buttonContent.replaceChildren()

    if (currentType === 'standart') {
      currentType = 'full'
      buttonContent.append(fullContent)
    } else {
      currentType = 'standart'
      buttonContent.append(standartContent)
    }

    urlInstanse.setEqualValue('appearance', currentType)
  }

  const buttonContent = Button({
    children: currentType === 'standart' ? standartContent : fullContent,
    classname: styles.button,
    onclick: handleButtonClick,
  })

  return buttonContent
}
