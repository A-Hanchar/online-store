import { urlInstanse } from 'helpers/urlInstanse'
import { Button } from 'components/Button/Button'
import commonStyles from '../commonStyles.css'
import { addClassnameToElement } from 'helpers'

export const CopyURLButton = () => {
  const handleClick = () => {
    navigator.clipboard.writeText(urlInstanse.getUrl().href)

    addClassnameToElement({ element: button, classname: commonStyles.disable })
  }

  const button = Button({ children: 'Copy URL', onclick: handleClick, classname: commonStyles.button })

  return button
}
