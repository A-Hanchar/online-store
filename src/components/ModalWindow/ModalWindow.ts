import { Body } from 'components/Body'
import { addClassnameToElement, createElementWithClassName, removeClassnameToElement } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { SEARCH_PARAMS } from 'interfaces'
import { PropsWithChildren } from 'types'
import styles from './styles.css'

export const ModalWindow = ({ children }: Required<PropsWithChildren>) => {
  const background = createElementWithClassName({ tagName: 'div', classname: styles.background })
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  background.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault()

    const target = event.target

    if (target === background) {
      removeClassnameToElement({ element: Body, classname: styles.disableScroll })
      urlInstanse.removeSearchValueByKey(SEARCH_PARAMS.MODAL)
      Body.removeChild(background)
    }
  })

  Body.append(background)
  addClassnameToElement({ element: Body, classname: styles.disableScroll })
  background.append(container)
  container.append(children)

  return background
}
