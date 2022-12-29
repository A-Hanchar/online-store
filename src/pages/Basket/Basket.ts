import { Products } from './components/Products'

export const Basket = () => {
  const fragment = document.createDocumentFragment()

  fragment.append(Products())

  return fragment
}
