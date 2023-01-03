import { Input } from 'components/Input'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'

export const PersonInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const nameInput = Input({
    placeholder: 'Name',
    classname: styles.input,
  })

  const phoneInput = Input({
    placeholder: 'Phone number',
    classname: styles.input,
  })

  const addressInput = Input({
    placeholder: 'Delivery address',
    classname: styles.input,
  })

  const emailInput = Input({
    type: 'email',
    placeholder: 'E-mail',
    classname: styles.input,
  })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
