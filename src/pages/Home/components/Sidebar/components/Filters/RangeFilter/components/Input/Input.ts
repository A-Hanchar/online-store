import styles from './styles.css'
import { createElementWithClassName, workDataInstanse } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { SEARCH_PARAMS } from 'types'

export const Input = ({
  type,
  key,
  textValueWrapper,
}: {
  type: 'left' | 'right'
  key: SEARCH_PARAMS.PRICE | SEARCH_PARAMS.STOCK
  textValueWrapper: HTMLParagraphElement
}) => {
  const searchPrice = urlInstanse.getRangeParam(key)
  const { min, max } = workDataInstanse.getRange(key)

  const input = createElementWithClassName({ tagName: 'input', classname: styles.inputRange })
  input.type = 'range'

  input.min = String(min)
  input.max = String(max)

  input.step = '1'

  if (type === 'left') {
    const value = String(searchPrice.start ?? min)

    input.value = value
    textValueWrapper.innerText = value
  }

  if (type === 'right') {
    const value = String(searchPrice.end ?? max)

    input.value = value
    textValueWrapper.innerText = value
  }

  input.addEventListener('input', () => {
    const { start, end } = urlInstanse.getRangeParam(key)

    const currentValue = Number(input.value)

    if (type === 'left') {
      if (end && currentValue >= end) {
        input.value = String(end)
      }

      urlInstanse.setSearchValue({
        key,
        type: 'range',
        value: { min: Number(input.value), max: Number(end ?? max) },
      })
    }

    if (type === 'right') {
      if (start && currentValue < start) {
        input.value = String(start)
      }

      urlInstanse.setSearchValue({
        key,
        type: 'range',
        value: { min: Number(start ?? min), max: Number(input.value) },
      })
    }

    textValueWrapper.innerText = String(input.value)
  })
  return input
}
