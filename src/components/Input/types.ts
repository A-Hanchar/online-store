export type InputProps = {
  id: string
  type: 'button' | 'checkbox' | 'email' | 'number' | 'radio' | 'range' | 'text' | 'submit'
  placeholder: string
  dataset?: string
  container?: boolean
  classname?: string
}
