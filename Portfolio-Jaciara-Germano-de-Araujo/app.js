import { valida } from './validate.js'

const inputs = document.querySelectorAll('input')


input.addEventListener('blur', (evento) => {
    valida(evento.target)
})