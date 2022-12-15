import { Header } from './componets/Header/Header'
import { Test } from 'types'
import styles from './styles.css'

const testArrayIds: Test[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

const root = document.getElementById('root')!

root.classList.add(styles.main!)

testArrayIds.forEach(({ id }) => {
  const p = document.createElement('p')

  p.innerText = `Id - ${id}`
  root.append(p)
})

Header()
