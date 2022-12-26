import { createElementWithClassName } from 'helpers'
import { CopyURLButton } from './components/CopyURLButton'
import { ResetFiltersButton } from './components/ResetFiltersButton'
import styles from './styles.css'

export const ActionButtons = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(ResetFiltersButton(), CopyURLButton())

  return wrapper
}
