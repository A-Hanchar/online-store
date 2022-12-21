import { Image } from 'components/Image'
import { Link } from 'components/Link'
import { routerPathes } from 'router/routerPathes'
import styles from './styles.css'

export const Logo = () => {
  const LogoImage = Image({
    src: 'https://api.logo.com/api/v2/images?format=webp&logo=logo_9466efa6-912f-4378-9e2e-9967f06f2c58&width=400&quality=80&primary=%23000000&secondary=%23000000&accent=%23000000&background=transparent&tertiary=%23000000&quaternary=%23ffffff&fit=contain&template=icononly&u=1671103426',
    alt: 'Online Shop',
  })

  const link = Link({ id: 'logo', children: LogoImage, href: routerPathes.home, classname: styles.logo })

  return link
}
