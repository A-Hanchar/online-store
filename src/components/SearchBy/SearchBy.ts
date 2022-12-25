import { createElementWithClassName } from 'helpers'
import { SearchByProps } from './types'
import styles from './styles.css'
import { urlInstanse } from 'helpers/urlInstanse'

export const SearchBy = ({ key, placeholder }: SearchByProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname: styles.input })

  input.type = 'text'
  input.placeholder = placeholder ?? ''

  input.value = urlInstanse.getLikeParam(key) ?? ''

  input.addEventListener('input', () => {
    const inputValue = input.value

    inputValue
      ? urlInstanse.setSearchValue({ key, type: 'like', value: input.value })
      : urlInstanse.removeSearchValueByKey(key)
  })

  return input
}
