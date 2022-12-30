import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CircleProps } from './types'

export const Circle = ({ width }: CircleProps) => {
  const circleWrapper = createElementWithClassName({ tagName: 'div', classname: styles.circleWrapper })
  const circle = createElementWithClassName({ tagName: 'div', classname: styles.circle })

  circle.style.width = `${width}%`

  circleWrapper.append(circle)

  return circleWrapper
}
