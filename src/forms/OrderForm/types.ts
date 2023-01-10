export type ValidationInputs = Array<{
  input: HTMLInputElement
  validation: RegExp | (() => boolean)
  error: HTMLElement
}>
