import { ValidationInputs } from './types'

export const isFormValid = (validationInputs: ValidationInputs) => {
  let isValid = true

  validationInputs.forEach(({ input, validation, error }) => {
    const value = input.value

    if (typeof validation === 'function') {
      if (validation()) {
        error.remove()
      } else {
        input.after(error)
        isValid = false
      }

      return
    }

    if (validation.test(value)) {
      error.remove()
    } else {
      input.after(error)
      isValid = false
    }
  })

  return isValid
}
