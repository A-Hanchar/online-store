import { urlInstanse } from 'helpers/urlInstanse'
import { Button } from 'components/Button/Button'
import commonStyles from '../commonStyles.css'
import { addClassnameToElement } from 'helpers'

export const ResetFiltersButton = () => {
  const handleClick = () => {
    urlInstanse.clearSearchParams()

    disableButton()
  }

  const button = Button({ children: 'Reset Filters', onclick: handleClick, classname: commonStyles.button })

  const disableButton = () => {
    addClassnameToElement({ element: button, classname: commonStyles.disable })
  }

  if (!urlInstanse.hasSearchParams()) {
    disableButton()
  }

  return button
}
