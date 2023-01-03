import { Button } from 'components/Button/Button'

import { addClassnameToElement, workDataInstanse, removeClassnameToElement, urlInstanse } from 'helpers'

import commonStyles from '../commonStyles.css'

export const ResetFiltersButton = () => {
  const handleClick = () => {
    urlInstanse.clearSearchParams()
    workDataInstanse.setInitialProducts()
  }

  const button = Button({ children: 'Reset Filters', onclick: handleClick, classname: commonStyles.button })

  const updateButton = () => {
    const search = urlInstanse.getUrl().search

    if (search) {
      removeClassnameToElement({ element: button, classname: commonStyles.disable })
      button.disabled = false

      return
    }

    addClassnameToElement({ element: button, classname: commonStyles.disable })
    button.disabled = true
  }

  urlInstanse.addCallback(updateButton)

  return button
}
