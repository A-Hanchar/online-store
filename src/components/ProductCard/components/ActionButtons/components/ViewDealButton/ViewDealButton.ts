import { Link } from 'components/Link'
import { ViewButtonProps } from './types'
import styles from './styles.css'
import { generatePathname } from 'helpers'

export const ViewDealButton = ({ brand, category, id, appearance = 'standart' }: ViewButtonProps) =>
  Link({
    children: 'View Deal',
    href: generatePathname.categoriesCategoryIdBrandIdProductId(category, brand, String(id)),
    classname: [styles.viewDeal, styles[appearance]],
  })
