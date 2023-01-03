import { SYMBOL } from 'enums'
import { urlInstanse } from 'helpers'
import { EqualKeys } from 'types'

export const onClickFilterButton: (props: { key: EqualKeys; addedValue: string }) => void = ({ key, addedValue }) => {
  const url = urlInstanse.getUrl()

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

  searchValue ? urlInstanse.setEqualValue(key, searchValue) : urlInstanse.removeSearchValueByKey(key)
}
