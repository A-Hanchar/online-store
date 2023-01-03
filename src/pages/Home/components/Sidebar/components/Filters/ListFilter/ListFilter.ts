import { Text } from 'components/Text'
import { capitalizeText, createElementWithClassName, workDataInstanse } from 'helpers'

import { ListElement } from '../ListElement'
import commonStyles from '../commonStyles.css'
import styles from './styles.css'
import { ListFilterProps } from './types'

export const ListFilter = ({ key, title }: ListFilterProps) => {
  workDataInstanse.setInitialProducts()
  const essences = workDataInstanse.getUniqElemntsByKey(key)

  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })
  const ul = createElementWithClassName({ tagName: 'ul', classname: styles.list })

  ul.append(
    ...essences.map((essence) => {
      const li = document.createElement('li')

      li.append(
        ListElement({
          content: capitalizeText(essence),
          searchKey: key,
          searchValue: essence,
        }),
      )

      return li
    }),
  )

  div.append(Text({ tagName: 'h2', text: title, classname: commonStyles.title }), ul)

  return div
}
