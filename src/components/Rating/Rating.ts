import { createElementWithClassName } from 'helpers'

import { Circle } from './components/Circle'
import styles from './styles.css'
import { RatingProps } from './types'

export const Rating = ({ rating }: RatingProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const countStars = Math.floor(rating)

  for (let i = 0; i < countStars; i++) {
    wrapper.append(Circle({}))
  }

  wrapper.append(Circle({ width: (rating - countStars) * 100 }))

  return wrapper
}
