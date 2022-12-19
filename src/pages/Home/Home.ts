import { getAllProducts } from 'api/products'
import { Cards } from './components/Cards'
import { Sidebar } from './components/Sidebar'
import { Title } from './components/Title'
import styles from './styles.css'

export const Home = (async () => {
  const fragment = document.createDocumentFragment()

  const contentWrapper = document.createElement('div')
  styles.contentWrapper && contentWrapper.classList.add(styles.contentWrapper)

  try {
    const [aside, contentData] = await Promise.all([Sidebar(), getAllProducts({ page: 1, searchParams: {} })])

    contentWrapper.replaceChildren()

    contentWrapper.append(Title, await Cards({ products: contentData.products }))
    fragment.append(aside, contentWrapper)
  } catch (error) {}

  return fragment
})()
