import { Image } from 'components/Image'
import { createElementWithClassName } from 'helpers'
import { ImagesProps } from './types'
import styles from './styles.css'

export const Images = ({ thumbnail, images }: ImagesProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const mainImageWrapper = createElementWithClassName({ tagName: 'div', classname: styles.mainImageWrapper })
  mainImageWrapper.append(Image({ src: thumbnail, alt: '', classname: styles.image }))

  const sliderImagesWrapper = createElementWithClassName({ tagName: 'div', classname: styles.sliderImagesWrapper })

  const allImages = [thumbnail, ...images]

  allImages.forEach((image, index) => {
    const imageBlock = Image({ src: image, alt: String(index), classname: styles.image })

    imageBlock.addEventListener('click', () => {
      mainImageWrapper.replaceChildren(Image({ src: image, alt: String(index), classname: styles.image }))
    })

    sliderImagesWrapper.append(imageBlock)
  })

  wrapper.append(mainImageWrapper, sliderImagesWrapper)

  return wrapper
}
