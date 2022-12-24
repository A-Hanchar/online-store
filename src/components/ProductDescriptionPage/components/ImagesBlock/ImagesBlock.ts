import { products } from 'mock/products'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Image } from 'components/Image'

export const ImagesBlock = (product: typeof products[0]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const image = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const imagesBlock = createElementWithClassName({ tagName: 'div', classname: styles.imagesBlock })

  product.images
    .slice(1, 4)
    .forEach((img) => imagesBlock.append(Image({ src: img, alt: product.title, classname: styles.img })))

  container.append(imagesBlock)

  imagesBlock.addEventListener('click', (event) => {
    const target = event.target as HTMLImageElement

    if (target) {
      if (image.querySelector('img')) {
        image.querySelector('img')?.remove()
      }
      image.append(Image({ src: target.src, alt: product.title, classname: styles.selectedImg }))
      container.append(image)
    }
  })

  return container
}
