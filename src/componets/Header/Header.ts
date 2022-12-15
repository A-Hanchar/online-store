import styles from './assets/styles/styles.css'

export const Header = () => {
  const root = document.querySelector('#root')
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const InputSearch = document.createElement('input')
  const cartElement = document.createElement('div')
  const goodsCounter = document.createElement('span')

  const headerElements = [cartElement, InputSearch, logo]
  headerElements.forEach((e) => header.prepend(e))

  root?.prepend(header)
  header.classList.add(styles.header!)
  logo.src =
    'https://api.logo.com/api/v2/images?format=webp&logo=logo_9466efa6-912f-4378-9e2e-9967f06f2c58&width=400&quality=80&primary=%23000000&secondary=%23000000&accent=%23000000&background=transparent&tertiary=%23000000&quaternary=%23ffffff&fit=contain&template=icononly&u=1671103426'
  InputSearch.placeholder = 'Search for anything'

  cartElement.classList.add(styles.cartElement!)
  cartElement.prepend(goodsCounter)
  goodsCounter.textContent = '1'
}
