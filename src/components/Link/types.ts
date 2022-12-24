import { PropsWithChildren } from 'types'

export type LinkProps = PropsWithChildren<{
  id: string
  href: string
  classname?: string
  target?: '_blank' | '_self' | '_top' | 'framename'
}>
