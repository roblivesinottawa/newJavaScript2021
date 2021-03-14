makeGuess = (guess) => {
    let min = 1
    let max = 10
    let guessedNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === guessedNum
}

console.log(makeGuess(2))