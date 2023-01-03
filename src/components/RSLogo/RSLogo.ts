import { Image } from 'components/Image'
import { Link } from 'components/Link'

import styles from './styles.css'

export const RSLogo = () => {
  const LogoImage = Image({
    src: '	https://rs.school/images/rs_school_js.svg',
    alt: 'RS School',
  })

  const link = Link({
    children: LogoImage,
    href: 'https://rs.school/js/',
    target: '_blank',
    classname: styles.logo,
  })

  return link
}
