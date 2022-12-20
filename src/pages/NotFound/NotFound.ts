import styles from './styles/styles.css'

export const NotFound = (() => {
  const container = document.createElement('div')
  const notFoundImg = document.createElement('div')
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h2')
  const button = document.createElement('button')
  const link = document.createElement('a')

  styles.container && container.classList.add(styles.container)
  styles.notFound && notFoundImg.classList.add(styles.notFound)
  styles.h1 && h1.classList.add(styles.h1)
  styles.h2 && h2.classList.add(styles.h2)
  styles.button && button.classList.add(styles.button)
  styles.link && link.classList.add(styles.link)

  h1.textContent = 'Sorry, it looks like the page get lost'
  h2.textContent = '(or someone has stolen it recently)'
  link.textContent = 'Back to Home'
  link.href = '/'

  container.append(notFoundImg, h1, h2, button)
  button.append(link)

  return container
})()
