import { workDataInstanse, urlInstanse } from 'helpers'
import { SearchByProps } from './types'
import styles from './styles.css'
import { Input } from 'components/Input'

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
