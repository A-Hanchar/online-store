import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { SortElement } from '../SortElement'

import styles from './styles.css'
import { SortingElementsProps } from './types'

export const SortingElements = ({ elements, onClick, classname }: SortingElementsProps) => {
  const wrapper = createElementWithClassName({
    tagName: 'div',
    classname: [styles.wrapper, classname],
  })

  wrapper.append(
    Text({ tagName: 'span', text: 'Sort By:', classname: styles.title }),
    ...elements.map(({ key, title }) => SortElement({ key, title, onClick })),
  )

  return wrapper
}
