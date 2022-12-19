import styles from './styles/styles.css'

export const NotFound = (() => {
  const div = document.createElement('div')

  div.innerHTML = `    <div class="${styles.container!}">
                          <div class="${styles.notFound!}"></div>
                          <h1>Sorry, it looks like the page get lost</h1>
                          <h2>(or someone has stolen it recently)</h2>
                          <button class="${styles.btn!}"><a href="/" class="${styles.link!}">Back to Home</a></button>
                        </div>`

  return div
})()
