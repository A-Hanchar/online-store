export const containsClassnameToElement = ({
  element,
  classname,
}: {
  element: HTMLElement
  classname?: string
}): boolean => {
  if (classname && element.classList.contains(classname)) {
    return true
  }
  return false
}
