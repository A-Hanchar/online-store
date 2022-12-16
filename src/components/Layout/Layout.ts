import { PropsWithChildren } from 'types'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()

  const header = document.createElement('header')
  header.innerText = 'Header'

  const main = document.createElement('main')

  fragment.append(header, main)

  if (children) {
    main.append(children)
  }

  return fragment
}
