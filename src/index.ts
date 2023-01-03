import './styles.css'
import { renderComponent } from 'router'

window.addEventListener('load', renderComponent)
window.onpopstate = renderComponent
