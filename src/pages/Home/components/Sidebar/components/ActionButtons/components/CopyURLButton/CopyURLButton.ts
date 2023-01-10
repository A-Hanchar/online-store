import { Button } from 'components/Button/Button'

import { addClassnameToElement, removeClassnameToElement, urlInstanse } from 'helpers'

import commonStyles from '../commonStyles.css'

export const CopyURLButton = () => {
  const handleClick = () => {
    navigator.clipboard.writeText(urlInstanse.getUrl().href)

    disableButton()
  }

  const disableButton = () => {
    addClassnameToElement({ element: button, classname: commonStyles.disable })
    button.disabled = true
  }

  const updateButton = () => {
    navigator.clipboard.readText().then((textFromBuffer) => {
      urlInstanse.updateURL()
      const href = urlInstanse.getUrl().href

      if (textFromBuffer !== href) {
        removeClassnameToElement({ element: button, classname: commonStyles.disable })
        button.disabled = false

        return
      }

      disableButton()
    })
  }

  const button = Button({ children: 'Copy URL', onclick: handleClick, classname: commonStyles.button })

  urlInstanse.addCallback(updateButton)

  return button
}
