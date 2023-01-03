import { Text } from 'components/Text'
import { createElementWithClassName, workDataInstanse, urlInstanse } from 'helpers'
import styles from './styles.css'

export const FoundCards = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const textContent = document.createDocumentFragment()

  const foundSpan = createElementWithClassName({ tagName: 'span', classname: styles.foundSpan })
  foundSpan.innerText = 'Found: '

  const countSpan = createElementWithClassName({ tagName: 'span', classname: styles.countSpan })

  textContent.append(foundSpan, countSpan)
  const text = Text({ tagName: 'p', children: textContent, classname: styles.text })

  wrapper.append(text)

  const setCountOfElements = () => {
    workDataInstanse.updateProductsWithRange()
    const products = workDataInstanse.getAllProducts()

    countSpan.innerText = String(products.length)
  }

  urlInstanse.addCallback(setCountOfElements)

  return wrapper
}
