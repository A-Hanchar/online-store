import { createElementWithClassName } from 'helpers'
import styles from './styles.css'

export const CardLogo = () => {
  const cardLogo = createElementWithClassName({ tagName: 'img', classname: styles.logo })
  cardLogo.src =
    'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'

  return cardLogo
}
