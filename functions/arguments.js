add = (x, y, z) => {
    return x + y + z
}
console.log(add(10, 20, 30))



let getScoreText = (name='anomymous', score=0) => {
    return `Name: ${name} - Score: ${score}`
}

console.log(getScoreText('Rob'))

// .2 = 20%
getTipPercentage = (total, tipPercent=.2) => {
    calculateTip = total * tipPercent
    return calculateTip
}

console.log(getTipPercentage(55, .25))