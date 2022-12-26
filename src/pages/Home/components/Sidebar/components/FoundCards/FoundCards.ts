import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import styles from './styles.css'

export const FoundCards = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })
  const foundCardCount = products.length

  const textContent = document.createDocumentFragment()

  const foundSpan = createElementWithClassName({ tagName: 'span', classname: styles.foundSpan })
  foundSpan.innerText = 'Found: '

  const countSpan = createElementWithClassName({ tagName: 'span', classname: styles.countSpan })
  countSpan.innerText = String(foundCardCount)

  textContent.append(foundSpan, countSpan)
  const text = Text({ tagName: 'p', children: textContent, classname: styles.text })

  wrapper.append(text)

  return wrapper
}
