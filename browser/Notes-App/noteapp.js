// DOM - document object model
const notes = [{
    title: 'my next trip',
    body: 'I would like to go to New York'
}, {
    title: 'things to work on',
    body: 'build a website'

}, {
    title: 'wake up at 6am',
    body: 'remove snow'
}]

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // clear an element
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach((note) => {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes,filters)


document.querySelector('#create-note').addEventListener('click', 
    (event) => {event.target.textContent = 'the button was clicked'})

// document.querySelector('#remove-all').addEventListener('click',
// () => {document.querySelectorAll('.note').forEach((note) => {
//     note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input', (event) => {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(event.target.elements.firstName.value)
//     event.target.elements.firstName.value = ''
// })

// document.querySelector('#check-me').addEventListener('change', (event) => {
//     console.log(event.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change', e => console.log(e.target.value))