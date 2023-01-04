import { Breadcrumbs } from 'components/Breadcrumbs'
import { StubLayout } from 'components/StubLayout'
import { createElementWithClassName, generatePathname } from 'helpers'
import { products } from 'mocks/products'
import { getCategoriesParams } from 'router'
import { routerPathes } from 'router/routerPathes'

import { ProductDescriptionPage } from './ProductDescriptionPage'
import styles from './styles.css'

export const Product = () => {
  const {
    productId = 'Product Not Found',
    categoryId = 'Category Not Found',
    brandId = 'Brand Not Found',
  } = getCategoriesParams()
  const product = products.find(({ id }) => id === Number(productId))

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  if (!product) {
    wrapper.append(
      Breadcrumbs({
        elements: [
          { name: 'Home', url: routerPathes.home },
          { name: 'Categories', url: routerPathes.categories },
          { name: categoryId, url: generatePathname.categoriesCategoryId(categoryId) },
          { name: brandId, url: generatePathname.categoriesCategoryIdBrandId(categoryId, brandId) },
          { name: 'Product Not Found', url: '' },
        ],
      }),
      StubLayout({ text: 'Product Not Found' }),
    )

    return wrapper
  }

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
