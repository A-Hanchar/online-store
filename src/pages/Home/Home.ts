import { getAllProducts } from 'api/products'

export const Home = (async () => {
  const div = document.createElement('div')
  div.innerText = 'Loading...'

  try {
    const data = await getAllProducts({ page: 2, searchParams: {} })

    div.innerText = String(data.total)
  } catch (error) {}

  return div

  // const data = (async () => {
  //   try {
  //     const q = await getAllProducts({ page: 2, searchParams: {} })

  //     return q
  //   } catch (error) {}
  // })()

  // data.then((a) => console.log(a))

  // div.innerText = String(data)

  // return div
  // div.addEventListener('load', async () => {
  //   try {
  //     console.log(div)

  //     const q = await getAllProducts({ page: 2, searchParams: {} })

  //     console.log(q)

  //     console.log(div)

  //     // return div
  //   } catch (error) {}
  // })

  // await getAllProducts({ page: 2, searchParams: {} }).then((products) => {
  //   console.log(products)

  //   div.innerText = String(products.total)

  //   return div
  // })
})()
