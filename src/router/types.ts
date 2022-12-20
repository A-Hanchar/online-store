export type RoutePathesKeys = 'home' | 'categories' | 'product' | 'basket' | 'notFound' | 'category'

export type RouterOwnObject = {
  path: string
  content: () => Node | Promise<Node>
  childrenRoutes?: RouterOwnObject[]
}
