import { ImagesBlockProps } from './types'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Image } from 'components/Image'

export const ImagesBlock = ({ images, title }: ImagesBlockProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const imageIsShow = createElementWithClassName({ tagName: 'div', classname: styles.imageIsShow })
  const imagesBlock = createElementWithClassName({ tagName: 'div', classname: styles.imagesBlock })

  images.slice(2, 4).forEach((img) => imagesBlock.append(Image({ src: img, alt: title, classname: styles.img })))

  imageIsShow.append(Image({ src: images[2]!, alt: title, classname: styles.selectedImg }))

  container.append(imagesBlock, imageIsShow)

  imagesBlock.addEventListener('click', (event) => {
    const target = event.target as HTMLImageElement
    if (target) {
      if (imageIsShow.querySelector('img')) {
        imageIsShow.querySelector('img')?.remove()
      }
      imageIsShow.append(Image({ src: target.src, alt: title, classname: styles.selectedImg }))
    }
  })

  return container
}
