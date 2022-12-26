import { SortElementProps } from './types'
import { urlInstanse } from 'helpers/urlInstanse'
import { Button } from 'components/Button'
import styles from './styles.css'

export const SortElement = ({ key, title, onClick }: SortElementProps) => {
  const handleButtonClick = () => {
    const { sortType } = urlInstanse.getSortByParam()

    onClick?.(title)

    urlInstanse.setSearchValue({ type: 'sort', value: { sortKey: key, sortType } })
  }

  const button = Button({ children: title, onclick: handleButtonClick, classname: styles.button })

  return button
}
