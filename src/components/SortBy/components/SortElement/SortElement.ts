import { SortElementProps } from './types'
import { urlInstanse } from 'helpers/urlInstanse'
import { Button } from 'components/Button'
import styles from './styles.css'
import { SORTING_TYPE } from 'interfaces'

export const SortElement = ({ key, title, onClick }: SortElementProps) => {
  const handleButtonClick = () => {
    const sortParam = urlInstanse.getSortByParam()

    onClick?.()

    urlInstanse.setSortValue(key, sortParam?.sortType ?? SORTING_TYPE.ASC)
  }

  const button = Button({ children: title, onclick: handleButtonClick, classname: styles.button })

  return button
}
