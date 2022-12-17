import { getAllProducts } from 'api/products'

export const Home = (async () => {
  const div = document.createElement('div')
  div.innerText = 'Loading...'

  try {
    const data = await getAllProducts({ page: 2, searchParams: {} })

    div.innerText = String(data.total)
  } catch (error) {}

  return div
})()
