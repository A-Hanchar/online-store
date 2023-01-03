import { ImagesBlockProps } from './types'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Image } from 'components/Image'

export const ImagesBlock = ({ images, title }: ImagesBlockProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const imageBlock = createElementWithClassName({ tagName: 'div', classname: styles.imageBlock })
  const imagesBlock = createElementWithClassName({ tagName: 'div', classname: styles.imagesBlock })

  images.slice(0, 3).forEach((img) => imagesBlock.append(Image({ src: img, alt: title, classname: styles.img })))
  imageBlock.append(Image({ src: images[2]!, alt: title, classname: styles.selectedImg }))

  container.append(imagesBlock, imageBlock)

  imagesBlock.addEventListener('click', (event) => {
    const target = event.target as HTMLImageElement
    if (target.classList.contains(styles.img!)) {
      if (imageBlock.querySelector('img')) {
        imageBlock.querySelector('img')?.remove()
      }
      imageBlock.append(Image({ src: target.src, alt: title, classname: styles.selectedImg }))
    }
  })

  return container
}
