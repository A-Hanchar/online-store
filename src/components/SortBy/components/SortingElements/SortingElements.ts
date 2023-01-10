import { Text } from 'components/Text'
import { addClassnameToElement, createElementWithClassName } from 'helpers'

import { SortElement } from '../SortElement'

import styles from './styles.css'
import { SortingElementsProps } from './types'

export const SortingElements = ({ elements, hiddenClassname }: SortingElementsProps) => {
  const wrapper = createElementWithClassName({
    tagName: 'div',
    classname: [styles.wrapper, hiddenClassname],
  })

  const handleClick = () => {
    addClassnameToElement({ element: wrapper, classname: hiddenClassname })
  }

  wrapper.append(
    Text({ tagName: 'span', text: 'Sort By:', classname: styles.title }),
    ...elements.map(({ key, title }) => SortElement({ key, title, onClick: handleClick })),
  )

  return wrapper
}
