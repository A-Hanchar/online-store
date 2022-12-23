import styles from './styles.css'
import { Image } from 'components/Image'

export const CardLogo = () => {
  const cardLogo = Image({
    src: 'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none',
    alt: 'Logo Bank',
    classname: styles.logo,
  })

  return cardLogo
}
