console.log()

let carrito = {}
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
document.addEventListener('DOMContentLoaded', e => {
    cargaDatosBD()
})

const cargaDatosBD = async () => {
    const res = await fetch('../db/api.json')
    const data = await res.json()
    console.log(data)
    pintarCards(data)
}

const pintarCards = (data) => {
    data.forEach(item => {
        //console.log(element)
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}