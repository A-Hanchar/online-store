import { createElementWithClassName } from 'helpers'
import { AppearanceButtonProps } from './types'
import styles from './styles.css'
import { Button } from 'components/Button'
import { urlInstanse } from 'helpers/urlInstanse'
import { Appearance, SEARCH_PARAMS } from 'types'

export const AppearanceButton = ({ type = 'standart' }: AppearanceButtonProps) => {
  let currentType = urlInstanse.getQueryParam<Appearance>(SEARCH_PARAMS.APPEARANCE) ?? type

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

    urlInstanse.setSearchValue({ type: 'equal', key: SEARCH_PARAMS.APPEARANCE, value: currentType })
  }

  const buttonContent = Button({
    children: currentType === 'standart' ? standartContent : fullContent,
    classname: styles.button,
    onclick: handleButtonClick,
  })

  return buttonContent
}
