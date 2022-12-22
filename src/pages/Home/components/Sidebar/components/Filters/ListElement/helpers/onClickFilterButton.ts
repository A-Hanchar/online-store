import { SEARCH_PARAMS, SYMBOL } from 'types'
import commonStyles from '../../commonStyles.css'

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
        .split(SYMBOL.COMMA)
        .filter((value) => value !== addedValue)
        .join(SYMBOL.COMMA)

      if (!searchValue) {
        url.searchParams.delete(key)
      }
    } else {
      searchValue += `${SYMBOL.COMMA}${addedValue}`
    }
  } else {
    searchValue = addedValue
  }

  commonStyles.isActive && button.classList.toggle(commonStyles.isActive)

  searchValue ? url.searchParams.set(key, searchValue) : url.searchParams.delete(key)
  window.history.pushState({}, '', url.href)
}
