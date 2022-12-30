import { Text } from 'components/Text'
import { urlInstanse } from 'helpers/urlInstanse'

export const TotalElements = () => {
  const text = Text({ tagName: 'p', text: 'Total:' })

  const renderText = () => {
    const params = urlInstanse.getPaginationParam()

    if (!params) {
      return
    }

    const { total } = params

    text.innerText = `Total: ${total}`
  }

  urlInstanse.addCallback(renderText)

  return text
}
