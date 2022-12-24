import { Text } from 'components/Text'
import { createElementWithClassName, workDataInstanse } from 'helpers'
import commonStyles from '../commonStyles.css'
import { RangeFilterProps } from './types'
import { Input } from './components/Input'
import styles from './styles.css'
import { urlInstanse } from 'helpers/urlInstanse'

export const RangeFilter = ({ key, title }: RangeFilterProps) => {
  const div = createElementWithClassName({ tagName: 'div', classname: commonStyles.filterWrapper })

  div.append(Text({ tagName: 'h2', text: title, classname: commonStyles.title }))

  const { min, max } = workDataInstanse.getRange(key)

  const valuesWrapper = createElementWithClassName({ tagName: 'div', classname: styles.valuesWrapper })
  const inputsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputsWrapper })

  const minValueWrapper = document.createElement('p')
  const leftInput = Input({ type: 'left', key, textValueWrapper: minValueWrapper })

  const maxValueWrapper = document.createElement('p')
  const rightInput = Input({ type: 'right', key, textValueWrapper: maxValueWrapper })

  const handleInputChange = () => {
    if (Number(leftInput.value) === min && Number(rightInput.value) === max) {
      urlInstanse.removeSearchValueByKey(key)
    }
  }

  leftInput.addEventListener('input', handleInputChange)
  rightInput.addEventListener('input', handleInputChange)

  valuesWrapper.append(minValueWrapper, maxValueWrapper)
  inputsWrapper.append(leftInput, rightInput)

  div.append(valuesWrapper, inputsWrapper)

  return div
}
