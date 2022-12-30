import { urlInstanse } from 'helpers/urlInstanse'
import { products } from 'mock/products'
import { routerPathes } from 'router/routerPathes'

export const ArrayData = (id: number, title: string) => {
  const arr = [{ name: 'Go to Store', url: routerPathes.home }]

  const product = products.filter((e) => e.id === id)
  product.forEach((prod) => {
    for (const key in prod) {
      if (key === 'category' || key === 'brand') {
        arr.push({ name: prod[key], url: urlInstanse.createURL(key, prod[key]).toString() })
      }
    }
  })
  const el = arr[1]
  arr[1] = arr[2] as { name: string; url: string }
  arr[2] = el as { name: string; url: string }
  arr.push({ name: title, url: '' })

  return arr
}
