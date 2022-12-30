import { createElementWithClassName } from 'helpers'
import { SizeButton } from './components/SizeButton'
import { SizeList } from './components/SizeList'
import { Title } from './components/Title'
import styles from './styles.css'

export const Limit = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const sizeList = SizeList()
  const sizeButton = SizeButton({ SizeList: sizeList })

  wrapper.append(Title(), sizeButton, sizeList)

  return wrapper
}
