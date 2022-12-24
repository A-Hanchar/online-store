import { Button } from 'components/Button'
import { addClassnameToElement } from 'helpers'
import { SYMBOL } from 'types'
import styles from './styles.css'
import { onClickFilterButton } from './helpers'
import { ListElementProps } from './types'
import { urlInstanse } from 'helpers/urlInstanse'

export const ListElement = ({ content, searchKey, searchValue, countOfProducts }: ListElementProps) => {
  const url = urlInstanse.getUrl()
  const gettedSearchValue = url.searchParams.get(searchKey)?.split(SYMBOL.COMMA)

  const li = document.createElement('li')

  const button = Button({
    children: `${content} (${countOfProducts})`,
    classname: styles.filterButton,
  })

  button.addEventListener('click', () => onClickFilterButton({ button, key: searchKey, addedValue: searchValue }))

  if (gettedSearchValue?.includes(searchValue)) {
    addClassnameToElement({ element: button, classname: styles.isActive })
  }

  li.append(button)

  return li
}
