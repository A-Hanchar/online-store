import { Button } from 'components/Button'
import { addClassnameToElement } from 'helpers'
import { SYMBOL } from 'types'
import commonStyles from '../commonStyles.css'
import { onClickFilterButton } from './helpers'
import { ListElementProps } from './types'

export const ListElement = ({ content, searchKey, searchValue, countOfProducts }: ListElementProps) => {
  const url = new URL(window.location.href)
  const gettedSearchValue = url.searchParams.get(searchKey)?.split(SYMBOL.COMMA)

  const li = document.createElement('li')

  const button = Button({
    children: `${content} (${countOfProducts})`,
    classname: commonStyles.filterButton,
  })

  button.addEventListener('click', () => onClickFilterButton({ button, key: searchKey, addedValue: searchValue }))

  if (gettedSearchValue?.includes(searchValue)) {
    addClassnameToElement({ element: button, classname: commonStyles.isActive })
  }

  li.append(button)

  return li
}
