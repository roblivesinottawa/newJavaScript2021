const tasks = [
'code', 
'eat', 
'shower', 
'play videogame',
'sleep'
]

// delete third item
tasks.splice(2, 1)
// add an item at the end
tasks.push('clean the house')
// remove first item
tasks.shift()

console.log(`you have ${tasks.length} todos.`)

tasks.forEach((tasks, index) => {
    const num = index + 1
    console.log(`${num}: ${tasks}`)
})

for (let i=0; i < tasks.length; i++) {
    console.log(`${i+1}: ${tasks[i]}`)
}

// alternative using variables
for (let i=0; i < tasks.length; i++) {
    const num = i+1
    const task = tasks[i]
    console.log(`${num}: ${task}`)
}
