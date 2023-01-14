import { Link } from 'components/Link'

import { generatePathname } from 'helpers'

import styles from './styles.css'
import { ViewButtonProps } from './types'

export const ViewDealButton = ({ brand, category, id, appearance = 'standart' }: ViewButtonProps) => {
  const pathname = generatePathname.categoriesCategoryIdBrandIdProductId(category, brand, String(id))

  return Link({
    children: 'View Deal',
    href: pathname,
    classname: [styles.viewDeal, styles[appearance]],
  })
}
