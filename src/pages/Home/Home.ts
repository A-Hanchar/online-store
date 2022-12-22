import { getAllProducts } from 'api/products'
import { Cards } from './components/Cards'
import { LoadMoreButton } from './components/LoadMoreButton'
import { Sidebar } from './components/Sidebar'
import { Title } from './components/Title'
import styles from './styles.css'

export const Home = async () => {
  const fragment = document.createDocumentFragment()

  const contentWrapper = document.createElement('div')
  styles.contentWrapper && contentWrapper.classList.add(styles.contentWrapper)

  let page = 0

  const loadMoreProducts = async () => {
    const contentData = await getAllProducts({ page, searchParams: {} })

    page += 1

    return contentData
  }

  try {
    const [aside, contentData] = await Promise.all([Sidebar(), loadMoreProducts()])

    contentWrapper.replaceChildren()

    contentWrapper.append(
      Title(),
      await Cards({ products: contentData.products }),
      await LoadMoreButton({ loadMore: loadMoreProducts, contentWrapper }),
    )
    fragment.append(aside, contentWrapper)
  } catch (error) {}

  return fragment
}
