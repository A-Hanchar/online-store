import { capitalizeText, createElementWithClassName, workDataInstanse } from 'helpers'
import { ListFilterProps } from './types'
import commonStyles from '../commonStyles.css'
import styles from './styles.css'
import { ListElement } from '../ListElement'
import { Text } from 'components/Text'

export const ListFilter = ({ key, title }: ListFilterProps) => {
  const essences = workDataInstanse.getAllElemntsByKey(key)

  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })
  const ul = createElementWithClassName({ tagName: 'ul', classname: styles.list })

  ul.append(
    ...essences.map((essence) => {
      return ListElement({
        content: capitalizeText(essence),
        searchKey: key,
        searchValue: essence,
        countOfProducts: workDataInstanse.getCountByKey(key, essence),
      })
    }),
  )

  div.append(Text({ tagName: 'h2', text: title, classname: commonStyles.title }), ul)

  return div
}
