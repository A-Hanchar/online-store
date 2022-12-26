import { Button } from 'components/Button'
import { createElementWithClassName, toggleClassnameToElement } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { Arrows } from './components/Arrows'
import { SortingElements } from './components/SortingElements'
import styles from './styles.css'
import { SortByProps } from './types'

export const SortBy = ({ elements }: SortByProps) => {
  const { sortKey } = urlInstanse.getSortByParam()
  const currentElem = elements.find(({ key }) => key === sortKey) ?? elements[0]

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const sortingTypeButton = Button({
    children: currentElem.title,
    classname: styles.chooseSorting,
    onclick: () => toggleClassnameToElement({ element: sortingElements, classname: styles.hidden }),
  })

  const handleClickOnSortTitle = (title: string) => {
    sortingTypeButton.replaceChildren()
    sortingTypeButton.innerText = title

    toggleClassnameToElement({ element: sortingElements, classname: styles.hidden })
  }

  const sortingElements = SortingElements({ elements, onClick: handleClickOnSortTitle, classname: styles.hidden })

  wrapper.append(sortingTypeButton, Arrows({ initialKey: currentElem.key }), sortingElements)

  return wrapper
}
