export const checkValidation = (input: HTMLInputElement, regexp: RegExp): boolean => {
  if (!regexp.test(input.value)) {
    const span = document.createElement('span')
    span.textContent = 'errr'
    input.after(span)
    return false
  }
  return true
}
