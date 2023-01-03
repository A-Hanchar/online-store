import { createElementWithClassName, urlInstanse } from 'helpers'
import styles from './styles.css'
import { Button } from 'components/Button'

export const AppearanceButton = () => {
  let currentType = urlInstanse.getAppearanceParam()

  const standartContent = createElementWithClassName({ tagName: 'div', classname: styles.standart })
  const fullContent = createElementWithClassName({ tagName: 'div', classname: styles.full })

  const handleButtonClick = () => {
    if (currentType === 'standart') {
      currentType = 'full'
      buttonContent.replaceChildren(fullContent)
    } else {
      currentType = 'standart'
      buttonContent.replaceChildren(standartContent)
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
