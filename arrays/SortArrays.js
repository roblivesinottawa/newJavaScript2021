const notes = [{
    title: 'Wake up at 6am',
    body: 'remove snow'
    
}, {
    title: 'Things to work on',
    body: 'build a website'

}, {
    title: 'My next trip',
    body: 'I would like to go to New York'
}]

sortNotes = (notes) => {
    //sort takes another function when sorting arrays
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

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

// console.log(findNotes(notes, 'remove'))
sortNotes(notes)
console.log(notes)