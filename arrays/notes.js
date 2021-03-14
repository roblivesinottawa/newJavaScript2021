const notes = ['note1', 'note2', 'note3']

// console.log(notes[notes.length - 1]) //note3
// console.log(notes[0]) //note1

// notes.push('note4') //add to end of array
// notes.pop() //remove the last item
// notes.shift() //removes note1
// notes.unshift('my first note') //add to the beginnng of string
// // provide index
// notes.splice(1, 1, 'new note')

// notes[0] = 'new note 0'
console.log(notes)
// to use forEach a defined array is needed
notes.forEach((item, index ) => {
    console.log(`${index}: ${item}`)
    
})

// iterate over the array
for (let i=0; i < notes.length; i++){
    console.log(notes[i])
}
// iterate backwards
for (let i=notes.length - 1; i >= 0; i--){
    console.log(notes[i])
}