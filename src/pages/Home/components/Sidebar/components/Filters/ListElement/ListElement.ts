import { Button } from 'components/Button'
import { SYMBOL } from 'enums'
import { addClassnameToElement, workDataInstanse, removeClassnameToElement, urlInstanse } from 'helpers'

import { onClickFilterButton } from './helpers'
import styles from './styles.css'
import { ListElementProps } from './types'

export const ListElement = ({ content, searchKey, searchValue }: ListElementProps) => {
  const button = Button({
    classname: styles.filterButton,
  })

  button.addEventListener('click', () => onClickFilterButton({ key: searchKey, addedValue: searchValue }))

  const checkButton = () => {
    workDataInstanse.updateProductsWithRange()

    const countOfElements = workDataInstanse.getProductsByKey(searchKey, searchValue).length
    const gettedSearchValue = urlInstanse.getQueryParam(searchKey)?.split(SYMBOL.COMMA)

    gettedSearchValue?.includes(searchValue)
      ? addClassnameToElement({ element: button, classname: styles.isActive })
      : removeClassnameToElement({ element: button, classname: styles.isActive })

    button.innerText = `${content}(${countOfElements})`
    button.disabled = !countOfElements
  }

  urlInstanse.addCallback(checkButton)
  workDataInstanse.addProductFilter({ type: 'equal', key: searchKey })

  return button
}
