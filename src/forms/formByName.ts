import { FormName } from 'types'

import { OrderForm } from './OrderForm'

export const formByName: Record<FormName, () => HTMLFormElement> = {
  orderForm: OrderForm,
}
