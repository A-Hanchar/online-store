import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { Button } from 'components/Button'

export const ActionButtons = async ({ id, category, brand }: ActionButtonsProps) => {
  const wrapper = document.createElement('div')
  styles.actionButtons && wrapper.classList.add(styles.actionButtons)

  wrapper.append(
    await Link({
      id: `${category}-${brand}-${id}`,
      children: () => Text({ tagName: 'span', text: 'View Deal' }),
      href: '/',
      classname: styles.viewDeal,
    }),
    await Button({ children: () => Text({ tagName: 'span', text: '+' }), classname: styles.addButton }),
  )

  return wrapper
}
