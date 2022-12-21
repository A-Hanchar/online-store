import { comma } from 'helpers'
import { SEARCH_PARAMS } from 'types'
import commonStyles from '../commonStyles.css'

export const onClickFilterButton: (props: {
  button: HTMLButtonElement
  key: SEARCH_PARAMS
  addedValue: string
}) => void = ({ button, key, addedValue }) => {
  const url = new URL(window.location.href)

  let searchValue = url.searchParams.get(key)

  if (searchValue) {
    if (searchValue.includes(addedValue)) {
      searchValue = searchValue
        .split(comma)
        .filter((value) => value !== addedValue)
        .join(comma)

      if (!searchValue) {
        url.searchParams.delete(SEARCH_PARAMS.CATERORY)
      }
    } else {
      searchValue += `${comma}${addedValue}`
    }
  } else {
    searchValue = addedValue
  }

  commonStyles.isActive && button.classList.toggle(commonStyles.isActive)
  url.searchParams.set(SEARCH_PARAMS.CATERORY, searchValue)

  window.history.pushState({}, '', url.href)
}
