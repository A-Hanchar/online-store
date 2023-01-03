import { Link } from 'components/Link'

import { generatePathname } from 'helpers'

import styles from './styles.css'
import { ViewButtonProps } from './types'

export const ViewDealButton = ({ brand, category, id, appearance = 'standart' }: ViewButtonProps) =>
  Link({
    children: 'View Deal',
    href: generatePathname.categoriesCategoryIdBrandIdProductId(category, brand, String(id)),
    classname: [styles.viewDeal, styles[appearance]],
  })
