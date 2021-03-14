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


const deleteTask = (tasks, taskText) => {
    const index = tasks.findIndex((task, index) => {
        return task.text.toLowerCase() === taskText.toLowerCase()
})
    if (index > - 1){
        tasks.splice(index, 2)
    }
    return tasks
}


const findTasksToDo = (tasks) => {
    return tasks.filter((task, index) => {
        return !task.completed
    })
}

const sortToDos = (tasks) => {
    tasks.sort((a, b) => {
        if (a.completed === false && b.completed === true) {
            return - 1
        } else if (b.completed === false && a.completed === true){
            return 1
        } else {
            return 0
        }
    })
}

sortToDos(tasks)
console.log(tasks)

// console.log(findTasksToDo(tasks))

// deleteTask(tasks, 'work out')
// deleteTask(tasks, 'learn c++')
// console.log(tasks)

