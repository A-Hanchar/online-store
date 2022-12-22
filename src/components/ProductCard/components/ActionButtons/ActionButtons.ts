import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { Link } from 'components/Link'
import { Button } from 'components/Button'
import { routerPathes } from 'router/routerPathes'
import { createElementWithClassName, localStorageInstanse } from 'helpers'

export const ActionButtons = ({ id, category, brand }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.actionButtons })

  wrapper.append(
    Link({
      id: `${category}-${brand}-${id}`,
      children: 'View Deal',
      href: routerPathes.home,
      classname: styles.viewDeal,
    }),
  )

  const productsIds = localStorageInstanse.getProductsIds()

  if (!productsIds.includes(id)) {
    const addInBasket = Button({
      children: '+',
      classname: styles.addButton,
    })

    addInBasket.addEventListener('click', () => {
      localStorageInstanse.setProductId(id)

      addInBasket.remove()
    })

    wrapper.append(addInBasket)
  }

  return wrapper
}
