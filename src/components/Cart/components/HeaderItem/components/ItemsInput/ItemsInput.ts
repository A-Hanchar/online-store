import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Input } from 'components/Input'

export const ItemsInput = (itemsNum: number) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const input = Input({ id: 'items-on-page', type: 'number', classname: styles.input })
  input.querySelector('input')!.value = itemsNum.toString()
  input.querySelector('input')!.min = '1'
  input.querySelector('input')!.max = itemsNum.toString()

  container.append(Text({ tagName: 'span', text: 'ITEMS: ', classname: styles.inputText }), input)

  return container
}
