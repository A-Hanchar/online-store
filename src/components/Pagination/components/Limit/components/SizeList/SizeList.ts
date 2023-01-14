import { PAGE_SIZE } from 'enums'
import { createElementWithClassName, toggleClassnameToElement, urlInstanse } from 'helpers'

import commonStyles from '../commonStyles.css'
import styles from './styles.css'

export const SizeList = () => {
  const ul = createElementWithClassName({ tagName: 'ul', classname: [commonStyles.hidden, styles.sizeList] })

  const sizes: PAGE_SIZE[] = [PAGE_SIZE.ONE, PAGE_SIZE.THREE, PAGE_SIZE.FIVE, PAGE_SIZE.TEN]

  sizes.forEach((size) => {
    const li = createElementWithClassName({ tagName: 'li', classname: styles.listItem })

    li.addEventListener('click', () => {
      toggleClassnameToElement({ element: ul, classname: [commonStyles.hidden, commonStyles.flex] })

      urlInstanse.setPaginationValue('size', size)
    })

    li.innerText = String(size)

    ul.append(li)
  })

  return ul
}
