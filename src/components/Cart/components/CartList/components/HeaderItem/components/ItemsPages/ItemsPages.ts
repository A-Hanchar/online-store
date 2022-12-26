import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Button } from 'components/Button'

export const ItemsPages = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const btnPrev = Button({ children: '<', classname: styles.btnPrev })
  const btnNext = Button({ children: '>', classname: styles.btnNext })
  const pageNum = Text({ tagName: 'span', text: '1', classname: styles.pageNum })

  container.append(Text({ tagName: 'span', text: 'PAGE: ', classname: styles.page }), btnPrev, pageNum, btnNext)

  return container
}
