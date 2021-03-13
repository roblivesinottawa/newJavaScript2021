let myBook = {
    title: '1984',
    author: 'George Orwell',
    year: '1949',
}


console.log(`${myBook.title} by ${myBook.author} was released in ${myBook.year}`)

myBook.title = 'Animal Farm'
myBook.year = 1945

console.log(`${myBook.title} by ${myBook.author} was released in ${myBook.year}`)