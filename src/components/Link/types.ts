import { PropsWithChildren } from 'types'
export type LinkProps =
  | PropsWithChildren<{
      id: string
      href: string
      classname?: string
    }>
  | { id: string; href: string; children: string; classname?: string }
