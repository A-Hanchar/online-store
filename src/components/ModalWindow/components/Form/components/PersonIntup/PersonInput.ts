import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'
import { createElementWithClassName } from 'helpers'

export const PersonInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const nameInput = Input({
    id: 'nameInput',
    type: INPUT_TYPES.text,
    placeholder: 'Name',
    classname: styles.input,
    dataset: 'name',
    container: true,
  })

  const phoneInput = Input({
    id: 'phoneInput',
    type: INPUT_TYPES.text,
    placeholder: 'Phone number',
    classname: styles.input,
    dataset: 'phone',
    container: true,
  })

  const addressInput = Input({
    id: 'addressInput',
    type: INPUT_TYPES.text,
    placeholder: 'Delivery address',
    classname: styles.input,
    dataset: 'address',
    container: true,
  })

  const emailInput = Input({
    id: 'emailInput',
    type: INPUT_TYPES.email,
    placeholder: 'E-mail',
    classname: styles.input,
    dataset: 'email',
    container: true,
  })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
