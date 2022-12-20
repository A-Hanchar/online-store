import { ImageProps } from './types'

export const Image = ({ src, alt, classname }: ImageProps) => {
  const image = document.createElement('img')

  image.src = src
  image.alt = alt

  classname && image.classList.add(classname)

  return image
}
