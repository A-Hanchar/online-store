import { Link } from 'components/Link'
import { ViewButtonProps } from './types'
import styles from './styles.css'
import { generatePathname } from 'helpers'

export const ViewDealButton = ({ brand, category, id, appearance = 'standart' }: ViewButtonProps) =>
  Link({
    id: `${category}-${brand}-${id}`,
    children: 'View Deal',
    href: generatePathname.categoriesCategoryIdProductId(category, brand, String(id)),
    classname: [styles.viewDeal, styles[appearance]],
  })
