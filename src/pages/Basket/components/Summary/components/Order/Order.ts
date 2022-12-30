import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { PricesInfo } from './components/PricesInfo'
import { Total } from './components/Total/Total'
import styles from './styles.css'
import { Orderprops } from './types'

export const Order = ({ callbackList }: Orderprops) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    Text({ tagName: 'h2', text: 'Order', classname: styles.h2 }),
    PricesInfo({ callbackList }),
    Total({ callbackList }),
  )

  return wrapper
}
