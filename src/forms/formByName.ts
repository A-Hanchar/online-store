import { OrderForm } from './OrderForm'

export const formByName: Record<'orderForm', () => HTMLFormElement> = {
  orderForm: OrderForm,
}
