import { createElementWithClassName, urlInstanse } from 'helpers'
import { ActionButtons } from './components/ActionButtons'
import { Limit } from './components/Limit'
import { TotalElements } from './components/TotalElements'
import styles from './styles.css'
import { PaginationProps } from './types'

export const Pagination = ({ totalElements }: PaginationProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(TotalElements(), Limit(), ActionButtons())

  const setPagination = () => {
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      urlInstanse.setPaginationValue('total', totalElements)

      return
    }

    const { total, size, page } = params

    const lastPage = Math.ceil(total / size)

    if (page > lastPage) {
      urlInstanse.setPaginationValue('page', lastPage)
    }

    if (total > totalElements) {
      urlInstanse.setPaginationValue('total', totalElements)
    }
  }

  setPagination()

  return wrapper
}
