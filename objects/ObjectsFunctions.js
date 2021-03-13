let myBook = {
    title: '1984',
    author: 'George Orwell',
    year: '1949',
}

let OtherBook = {
    title: 'Animal Farm',
    author: 'George Orwell',
    year: '1945',
}

// passing an object into a function
getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        releaseYear: `${book.title} was released in ${book.year}`
    }

}

let bookOne = getSummary(myBook)
console.log(bookOne.releaseYear)

let bookTwo = getSummary(OtherBook)
console.log(bookTwo.summary, bookTwo.releaseYear)