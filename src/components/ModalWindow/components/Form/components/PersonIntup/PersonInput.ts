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
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const phoneInput = Input({
    id: 'phoneInput',
    type: 'text',
    placeholder: 'Phone number',
    classname: styles.input,
    dataset: 'phone',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const addressInput = Input({
    id: 'addressInput',
    type: 'text',
    placeholder: 'Delivery address',
    classname: styles.input,
    dataset: 'address',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  const emailInput = Input({
    id: 'emailInput',
    type: 'email',
    placeholder: 'E-mail',
    classname: styles.input,
    dataset: 'email',
    container: createElementWithClassName({ tagName: 'div' }),
  })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
