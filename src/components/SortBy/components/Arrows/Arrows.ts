import { Button } from 'components/Button'
import { DATA_ATTRIBUTE, SORT_TYPE } from 'enums'
import { createElementWithClassName, workDataInstanse, urlInstanse } from 'helpers'
import styles from './styles.css'
import { ArrowsProps } from './types'

export const Arrows = ({ initialKey }: ArrowsProps) => {
  const sortingParam = urlInstanse.getSortByParam()

  let currentSort = sortingParam ? sortingParam.sortType : SORT_TYPE.ASC

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

    const sortingParam = urlInstanse.getSortByParam()

    urlInstanse.setSortValue(sortingParam?.sortKey ?? initialKey, currentSort)
    workDataInstanse.setSortingParams(initialKey, currentSort)
  }

  const arrowsButton = Button({ children: arrowsWrapper, classname: styles.sortButton, onclick: handleButtonClick })

  return arrowsButton
}
