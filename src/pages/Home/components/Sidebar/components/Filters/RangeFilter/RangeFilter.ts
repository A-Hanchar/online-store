import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import commonStyles from '../commonStyles.css'
import { RangeFilterProps } from './types'
import { Input } from './components/Input'
import styles from './styles.css'

export const RangeFilter = ({ key, title }: RangeFilterProps) => {
  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })

  const titleWrapper = Text({ tagName: 'h2', text: title, classname: commonStyles.title })

  const valuesWrapper = createElementWithClassName({ tagName: 'div', classname: styles.valuesWrapper })
  const inputsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputsWrapper })

  const [
    { textValueWrapper: minValueWrapper, input: leftInput },
    { textValueWrapper: maxValueWrapper, input: rightInput },
  ] = [Input({ type: 'left', key }), Input({ type: 'right', key })]

  valuesWrapper.append(minValueWrapper, maxValueWrapper)
  inputsWrapper.append(leftInput, rightInput)

  div.append(titleWrapper, valuesWrapper, inputsWrapper)

  return div
}
