import { PropsWithChildren } from 'types'
export type LinkProps = PropsWithChildren<{
  id: string
  href: string
  text: string
  classname?: string
}>
