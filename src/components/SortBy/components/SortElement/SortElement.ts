import { SortElementProps } from './types'
import { urlInstanse } from 'helpers'
import { Button } from 'components/Button'
import styles from './styles.css'
import { SORT_TYPE } from 'enums'

export const SortElement = ({ key, title, onClick }: SortElementProps) => {
  const handleButtonClick = () => {
    const sortParam = urlInstanse.getSortByParam()

    onClick?.()

    urlInstanse.setSortValue(key, sortParam?.sortType ?? SORT_TYPE.ASC)
  }

  const button = Button({ children: title, onclick: handleButtonClick, classname: styles.button })

  return button
}
