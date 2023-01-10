import { Input } from 'components/Input'
import { workDataInstanse, urlInstanse } from 'helpers'

import styles from './styles.css'
import { SearchByProps } from './types'

export const SearchBy = ({ key, placeholder = '' }: SearchByProps) => {
  const input = Input({ classname: styles.input, placeholder })

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
