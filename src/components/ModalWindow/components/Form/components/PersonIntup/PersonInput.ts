import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'

export const PersonInput = () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  const nameInput = Input({
    id: 'nameInput',
    type: INPUT_TYPES.text,
    placeholder: 'Name',
    classname: styles.input,
  })

  const phoneInput = Input({
    id: 'phoneInput',
    type: INPUT_TYPES.text,
    placeholder: 'Phone number',
    classname: styles.input,
  })

  const addressInput = Input({
    id: 'addressInput',
    type: INPUT_TYPES.text,
    placeholder: 'Delivery address',
    classname: styles.input,
  })

  const emailInput = Input({
    id: 'emailInput',
    type: INPUT_TYPES.email,
    placeholder: 'E-mail',
    classname: styles.input,
  })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
