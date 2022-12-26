import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Button } from 'components/Button'

export const ItemsPages = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const btnPrev = Button({ children: '<', classname: styles.btnPrev })
  const btnNext = Button({ children: '>', classname: styles.btnNext })
  const page = Text({ tagName: 'span', text: '1', classname: styles.page })

  container.append(Text({ tagName: 'span', text: 'PAGE: ', classname: styles.inputText }), btnPrev, page, btnNext)

  return container
}
