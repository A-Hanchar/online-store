import { Text } from 'components/Text'

import styles from './styles.css'

export const ErrorMessage = () => Text({ tagName: 'p', text: 'Error', classname: styles.error })
