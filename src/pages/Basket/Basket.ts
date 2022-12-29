import { Products } from './components/Products'
import { Summary } from './components/Summary'

export const Basket = () => {
  const callbackList: Array<() => void> = []

  const fragment = document.createDocumentFragment()

  fragment.append(Products({ callbackList }), Summary({ callbackList }))

  callbackList.forEach((callback) => callback())

  return fragment
}
