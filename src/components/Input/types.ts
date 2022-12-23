import { INPUT_TYPES } from './enums'
export type InputProps = {
  id: string
  type: INPUT_TYPES
  placeholder: string
  dataset: string
  container?: boolean
  classname?: string
}
