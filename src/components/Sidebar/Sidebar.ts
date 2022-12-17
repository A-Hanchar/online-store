import { getCategories } from 'api/products'
import { Link } from 'components/Link'

export const Sidebar = async () => {
  const aside = document.createElement('aside')

  const navigation = document.createElement('nav')
  const ul = document.createElement('ul')

  try {
    const categories = await getCategories()

    categories.forEach((category) => {
      const li = document.createElement('li')

      const link = Link({ id: category, content: category, href: `/categories/${category}` })

      li.append(link)
      ul.append(li)
    })
  } catch (error) {}

  navigation.append(ul)
  aside.append(navigation)

  return aside
}
