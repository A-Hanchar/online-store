import { Image } from 'components/Image'
import { Link } from 'components/Link'
import styles from './styles.css'

export const Logo = async () => {
  const LogoImage = Image({
    src: '	https://rs.school/images/rs_school_js.svg',
    alt: 'RS School',
  })

  const link = await Link({ id: 'logo', children: () => LogoImage, href: 'https://rs.school/js/' })
  styles.logo && link.classList.add(styles.logo)

  return link
}
