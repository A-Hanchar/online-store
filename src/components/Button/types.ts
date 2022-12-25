import { PropsWithChildren } from 'types'

type ButtonOwnProps = {
  classname?: string | Array<string | undefined>
  onclick?: () => void
}

export type ButtonProps = PropsWithChildren<ButtonOwnProps> | (ButtonOwnProps & { children?: string })
