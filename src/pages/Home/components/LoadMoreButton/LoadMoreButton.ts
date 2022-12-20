import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { Cards } from '../Cards'
import { LoadMoreButtonProps } from './types'
import styles from './styles.css'

export const LoadMoreButton = async ({ loadMore, contentWrapper }: LoadMoreButtonProps) => {
  const handleShowMoreClick = async () => {
    try {
      const { products, total, skip, limit } = await loadMore()

      contentWrapper.insertBefore(await Cards({ products }), ShowMoreButton)

      if (skip + limit >= total) {
        ShowMoreButton.remove()
      }
    } catch (error) {}
  }

  const ShowMoreButton = await Button({
    children: () => Text({ tagName: 'span', text: 'Show More' }),
    onclick: handleShowMoreClick,
    classname: styles.button,
  })

  return ShowMoreButton
}
