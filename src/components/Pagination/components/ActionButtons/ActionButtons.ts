import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { createElementWithClassName, urlInstanse } from 'helpers'

import styles from './styles.css'

export const ActionButtons = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const handleClick = (type: 'prev' | 'next') => {
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      return
    }

    const { page } = params
    const nextPage = type === 'prev' ? page - 1 : page + 1

    urlInstanse.setPaginationValue('page', nextPage)
  }

  const prevButton = Button({ children: 'Prev', classname: styles.button, onclick: () => handleClick('prev') })
  const currentPage = Text({ tagName: 'span', children: '1' })
  const nextButton = Button({ children: 'Next', classname: styles.button, onclick: () => handleClick('next') })

  const renderCurrentPage = () => {
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      return
    }

    const { page, total, size } = params

    prevButton.disabled = page <= 1
    nextButton.disabled = page >= Math.ceil(total / size)

    currentPage.innerText = String(page)
  }

  wrapper.append(prevButton, currentPage, nextButton)

  urlInstanse.addCallback(renderCurrentPage)

  return wrapper
}
