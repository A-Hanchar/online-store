import { Input } from 'components/Input'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'

export const PersonInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const nameInput = Input({
    id: 'nameInput',
    type: 'text',
    placeholder: 'Name',
    classname: styles.input,
    dataset: 'name',
    container: true,
  })

  const phoneInput = Input({
    id: 'phoneInput',
    type: 'text',
    placeholder: 'Phone number',
    classname: styles.input,
    dataset: 'phone',
    container: true,
  })

  const addressInput = Input({
    id: 'addressInput',
    type: 'text',
    placeholder: 'Delivery address',
    classname: styles.input,
    dataset: 'address',
    container: true,
  })

  const emailInput = Input({
    id: 'emailInput',
    type: 'email',
    placeholder: 'E-mail',
    classname: styles.input,
    dataset: 'email',
    container: true,
  })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
