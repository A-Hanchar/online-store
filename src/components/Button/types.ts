import { PropsWithChildren } from 'types'

type ButtonOwnProps = {
  classname?: string
  onclick?: () => void
}

export type ButtonProps = PropsWithChildren<ButtonOwnProps> | (ButtonOwnProps & { children?: string })
