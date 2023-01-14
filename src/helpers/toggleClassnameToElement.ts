export const toggleClassnameToElement = ({
  element,
  classname,
}: {
  element: HTMLElement
  classname?: string | Array<string | undefined>
}) => {
  if (!classname) {
    return
  }

  if (typeof classname === 'string') {
    element.classList.toggle(classname)

    return
  }

  if (Array.isArray(classname)) {
    classname.filter(Boolean).forEach((cssClass) => {
      cssClass && element.classList.toggle(cssClass)
    })
  }
}
