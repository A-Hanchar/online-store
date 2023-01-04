import { Body } from 'components/Body'
import { SEARCH_PARAMS } from 'enums'
import { addClassnameToElement, createElementWithClassName, removeClassnameToElement, urlInstanse } from 'helpers'
import { PropsWithChildren } from 'types'

import styles from './styles.css'

export const ModalWindow = ({ children }: Required<PropsWithChildren>) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const contentWrapper = createElementWithClassName({ tagName: 'div', classname: styles.contentWrapper })
  contentWrapper.append(children)

  wrapper.addEventListener('click', (event) => {
    event.preventDefault()

    const target = event.target

    if (target === wrapper) {
      urlInstanse.removeSearchValueByKey(SEARCH_PARAMS.MODAL, 'replace')

      removeClassnameToElement({ element: Body, classname: styles.disableScroll })
      Body.removeChild(wrapper)
    }
  })

  Body.append(wrapper)
  addClassnameToElement({ element: Body, classname: styles.disableScroll })

  wrapper.append(contentWrapper)

  return wrapper
}
