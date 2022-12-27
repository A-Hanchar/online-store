import { createElementWithClassName, workDataInstanse } from 'helpers'
import { SearchByProps } from './types'
import styles from './styles.css'
import { urlInstanse } from 'helpers/urlInstanse'

export const SearchBy = ({ key, placeholder = '' }: SearchByProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname: styles.input })

  input.type = 'text'
  input.placeholder = placeholder

  const setValue = () => {
    input.value = urlInstanse.getLikeParam(key) ?? ''
  }

  input.addEventListener('input', () => {
    const inputValue = input.value

    inputValue ? urlInstanse.setLikeValue(key, input.value) : urlInstanse.removeSearchValueByKey(key)
  })

  workDataInstanse.addProductFilter({ key, type: 'like' })
  urlInstanse.addCallback(setValue)

  return input
}
