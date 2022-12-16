export const getURLParams = (): {
  productId?: string
} => {
  const url = new URL(window.location.href)
  const pathname = url.pathname

  const pathNameParts = pathname.split('/').filter(Boolean)

  const productsIndex = pathNameParts.findIndex((path) => path === 'products')

  const productId = pathNameParts[productsIndex + 1]

  if (productsIndex !== -1 && productId && productId === pathNameParts.at(-1)) {
    return {
      productId,
    }
  }

  return {}
}
