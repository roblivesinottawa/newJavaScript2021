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

findNote = (notes, note_title) => {
    return notes.find((note, index) => {
        return note.title.toLowerCase() === note_title.toLowerCase() 
    })
}

findNotes = (notes, searchText) => {
    return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
    return isTitleMatch || isBodyMatch
    })

}

console.log(findNotes(notes, 'remove'))


// const note = findNote(notes, 'my next trip')
// console.log(note)

// notes.forEach((note, index) => {
//     console.log(`${note.title}: ${note.body}`)
// })

// const index = notes.findIndex((note, index) => {
//     console.log(note)
//     return note.title === 'wake up at 6am'
// })
// console.log(index)