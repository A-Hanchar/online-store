import { createElementWithClassName, workDataInstanse, urlInstanse } from 'helpers'

import styles from './styles.css'
import { InputProps } from './types'

export const Input = ({ type, key }: InputProps) => {
  const isLeftType = type === 'left'
  const isRightType = type === 'right'

  const textValueWrapper = document.createElement('p')

  const input = createElementWithClassName({ tagName: 'input', classname: styles.inputRange })
  input.type = 'range'
  input.step = '1'

  const setInputParams = () => {
    workDataInstanse.updateProductsByFilters()
    const searchRangeParams = urlInstanse.getRangeParam(key)
    const { min, max } = workDataInstanse.getCurrentRange(key)

    input.min = String(min)
    input.max = String(max)

    input.value = (() => {
      if (!searchRangeParams) {
        return String(isLeftType ? min : max)
      }

      const { start, end } = searchRangeParams

      if (isLeftType) {
        return String(start >= min ? start : min)
      }

      return String(end <= max ? end : max)
    })()

    textValueWrapper.innerText = input.value
  }

  input.addEventListener('input', () => {
    workDataInstanse.updateProductsByFilters()
    const searchRangeParams = urlInstanse.getRangeParam(key)

    if (searchRangeParams) {
      const { start, end } = searchRangeParams
      const currentValue = Number(input.value)

      if (isLeftType && currentValue >= end) {
        input.value = String(end)
      }

      if (isRightType && currentValue <= start) {
        input.value = String(start)
      }
    }

    textValueWrapper.innerText = input.value
  })

  input.addEventListener('mouseup', () => {
    const { min, max } = workDataInstanse.getRange(key)
    const searchRangeParams = urlInstanse.getRangeParam(key)

    const value = Number(input.value)

    const left = isLeftType ? value : searchRangeParams?.start ?? min
    const right = isRightType ? value : searchRangeParams?.end ?? max

    left === min && right === max
      ? urlInstanse.removeSearchValueByKey(key)
      : urlInstanse.setRangeValue(key, { min: left, max: right })
  })

  workDataInstanse.addProductRangeFilter(key)
  urlInstanse.addCallback(setInputParams)

  return { input, textValueWrapper }
}
