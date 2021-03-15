// DOM - document object model
const tasks = [{
    text: 'feed the dog',
    completed: false,
}, {
    text: 'learn c++',
    completed: true,
}, {
    text: 'work out',
    completed: true
}, {
    text: 'clean the house',
    completed: false,
}, {
    text: 'do the laundry',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = (tasks, filters) => {
    const filteredTodos = tasks.filter((task) => {

        const searchTextMatch = task.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !task.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTasks = filteredTodos.filter((task) => {
        return !task.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTasks.length} tasks left.`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach((task) => {
        const p = document.createElement('p')
        p.textContent = task.text
        document.querySelector('#todos').appendChild(p)
    })
    
}

renderTodos(tasks, filters)


// listen for new to do creation
// document.querySelector('#add-todo').addEventListener('click',
// (e) => {
//     console.log('added a new to do')
// })

// document.querySelector('#remove-todo').addEventListener('click', 
// (e) => {
//     console.log('removed to do')
// })


// document.querySelector('#new-todo').addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', 
(e) =>  {
    filters.searchText = e.target.value
    renderTodos(tasks, filters)

})

document.querySelector('#todo-form').addEventListener('submit', 
(e) => {
    e.preventDefault()
    tasks.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(tasks, filters)
    e.target.elements.text.value = ''

    
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(tasks, filters)
})