import { Text } from 'components/Text'
import styles from './styles.css'

export const Title = (() => Text({ tagName: 'h1', text: 'Online Shop', classname: styles.title }))()
