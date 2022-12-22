import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { routerPathes } from 'router/routerPathes'
import { localStorageInstanse } from 'helpers'

export const ActionButtons = async ({ id, category, brand }: ActionButtonsProps) => {
  const wrapper = document.createElement('div')
  styles.actionButtons && wrapper.classList.add(styles.actionButtons)

  wrapper.append(
    await Link({
      id: `${category}-${brand}-${id}`,
      children: () => Text({ tagName: 'span', text: 'View Deal' }),
      href: routerPathes.home,
      classname: styles.viewDeal,
    }),
  )

  const productsIds = localStorageInstanse.getProductsIds()

  if (!productsIds.includes(id)) {
    const addInBasket = await Button({
      children: () => Text({ tagName: 'span', text: '+' }),
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
