import { Button } from 'components/Button'
import { SORT_TYPE } from 'enums'
import { urlInstanse } from 'helpers'

import styles from './styles.css'

import { SortElementProps } from './types'

export const SortElement = ({ key, title, onClick }: SortElementProps) => {
  const handleButtonClick = () => {
    const sortParam = urlInstanse.getSortByParam()

    onClick?.()

    urlInstanse.setSortValue(key, sortParam?.sortType ?? SORT_TYPE.ASC)
  }

  const button = Button({ children: title, onclick: handleButtonClick, classname: styles.button })

  return button
}
