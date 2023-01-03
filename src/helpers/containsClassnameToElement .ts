export const containsClassnameToElement = ({
  element,
  classname = '',
}: {
  element: HTMLElement
  classname?: string
}): boolean => {
  return element.classList.contains(classname)
}
