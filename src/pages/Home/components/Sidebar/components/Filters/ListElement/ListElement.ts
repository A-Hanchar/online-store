import { Button } from 'components/Button'
import { addClassnameToElement, workDataInstanse } from 'helpers'
import { SYMBOL } from 'types'
import styles from './styles.css'
import { onClickFilterButton } from './helpers'
import { ListElementProps } from './types'
import { urlInstanse } from 'helpers/urlInstanse'
import { removeClassnameToElement } from 'helpers/removeClassnameToElement '

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
