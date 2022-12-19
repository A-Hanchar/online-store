import { PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string
  onclick?: () => void
}>
