import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'

export const PersonInput = () => {
  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)

  // const nameInput = Input({
  //   id: 'nameInput',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Name',
  //   // regExp: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  //   classname: styles.input,
  // })

  // const phoneInput = Input({
  //   id: 'phoneInput',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Phone number',
  //   // regExp: /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/,
  //   classname: styles.input,
  // })

  // const addressInput = Input({
  //   id: 'addressInput',
  //   type: INPUT_TYPES.text,
  //   placeholder: 'Delivery address',
  //   // regExp: /^(\w{5,}\s){2,}(\w{5,})/,
  //   classname: styles.input,
  // })

  // const emailInput = Input({
  //   id: 'emailInput',
  //   type: INPUT_TYPES.email,
  //   placeholder: 'E-mail',
  //   // regExp: /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/,
  //   classname: styles.input,
  // })

  container.append(nameInput, phoneInput, addressInput, emailInput)
  return container
}
