export type AddContentType = {
  content: () => HTMLElement | Promise<HTMLElement>
  className?: string
}
