import { Breadcrumbs } from 'components/Breadcrumbs'
import { createElementWithClassName, generatePathname } from 'helpers'
import { products } from 'mock/products'
import { getCategoriesParams } from 'router'
import { routerPathes } from 'router/routerPathes'

import { ProductDescriptionPage } from './ProductDescriptionPage'
import styles from './styles.css'

export const Product = () => {
  const { productId } = getCategoriesParams()
  const product = products.find(({ id }) => id === Number(productId))

  if (!productId || !product) {
    return document.createDocumentFragment()
  }

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(
    Breadcrumbs({
      elements: [
        { name: 'Home', url: routerPathes.home },
        { name: 'Categories', url: routerPathes.categories },
        { name: product.category, url: generatePathname.categoriesCategoryId(product.category) },
        { name: product.brand, url: generatePathname.categoriesCategoryIdBrandId(product.category, product.brand) },
        {
          name: product.title,
          url: generatePathname.categoriesCategoryIdBrandIdProductId(
            product.category,
            product.brand,
            String(product.id),
          ),
        },
      ],
    }),
    ProductDescriptionPage(product),
  )

  return wrapper
}
