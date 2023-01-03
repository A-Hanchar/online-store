import { Button } from 'components/Button'
import { SORT_TYPE } from 'enums'
import { createElementWithClassName, toggleClassnameToElement, workDataInstanse, urlInstanse } from 'helpers'

import { Arrows } from './components/Arrows'
import { SortingElements } from './components/SortingElements'
import styles from './styles.css'
import { SortByProps } from './types'

export const SortBy = ({ elements }: SortByProps) => {
  const sortParam = urlInstanse.getSortByParam()
  const currentElem = sortParam ? elements.find(({ key }) => key === sortParam.sortKey) ?? elements[0] : elements[0]

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const sortingTypeButton = Button({
    classname: styles.chooseSorting,
    onclick: () => toggleClassnameToElement({ element: sortingElements, classname: styles.hidden }),
  })

  const updateSortingElements = () => {
    const sortParam = urlInstanse.getSortByParam()
    const currentElem = sortParam ? elements.find(({ key }) => key === sortParam.sortKey) ?? elements[0] : elements[0]

    const sortKey = sortParam?.sortKey ?? currentElem.key
    const sortType = sortParam?.sortType ?? SORT_TYPE.ASC

    sortingTypeButton.replaceChildren(currentElem.title)

    workDataInstanse.setSortingParams(sortKey, sortType)
  }

  const sortingElements = SortingElements({ elements, hiddenClassname: styles.hidden })

  wrapper.append(sortingTypeButton, Arrows({ initialKey: currentElem.key }), sortingElements)

  urlInstanse.addCallback(updateSortingElements)

  return wrapper
}
