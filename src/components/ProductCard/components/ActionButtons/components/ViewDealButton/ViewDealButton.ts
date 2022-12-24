import { Link } from 'components/Link'
import { routerPathes } from 'router/routerPathes'
import { ViewButtonProps } from './types'
import styles from './styles.css'

export const ViewDealButton = ({ brand, category, id, appearance = 'standart' }: ViewButtonProps) =>
  Link({
    id: `${category}-${brand}-${id}`,
    children: 'View Deal',
    href: routerPathes.home,
    classname: [styles.viewDeal, styles[appearance]],
  })
