import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { DATA_ATTRIBUTE, SORT_TYPE } from 'types'
import styles from './styles.css'
import { SortByProps } from './types'

export const SortBy = ({ key, sort = SORT_TYPE.ASC, title }: SortByProps) => {
  let currentSort = urlInstanse.getSortTypeByKey(key) ?? sort

  const sortWrapper = createElementWithClassName({ tagName: 'div' })

  const arrowsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.arrowsWrapper })
  const arrowAsc = createElementWithClassName({ tagName: 'span', classname: [styles.arrowAsc, styles.arrow] })
  const arrowDesc = createElementWithClassName({ tagName: 'span', classname: [styles.arrowDesc, styles.arrow] })

  arrowsWrapper.append(arrowAsc, arrowDesc)

  const setArrowsSortType = () => {
    arrowAsc.setAttribute(DATA_ATTRIBUTE.DATA_SORT_TYPE, currentSort)
    arrowDesc.setAttribute(DATA_ATTRIBUTE.DATA_SORT_TYPE, currentSort)
  }

  setArrowsSortType()

  const handleButtonClick = () => {
    currentSort = currentSort === SORT_TYPE.ASC ? SORT_TYPE.DESC : SORT_TYPE.ASC
    setArrowsSortType()

    urlInstanse.setSearchValue({ type: 'sort', value: { sortKey: key, sortType: currentSort } })
  }

  const sortButton = Button({ children: title, classname: styles.sortButton, onclick: handleButtonClick })

  sortButton.append(arrowsWrapper)

  sortWrapper.append(sortButton)

  return sortWrapper
}
