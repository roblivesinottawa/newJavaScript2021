gradeCalculator = (student_score, total_score=100) => {
    let percent = (student_score / total_score) * 100
    let letterGrade = ''

    if (percent >= 90){
        letterGrade = 'A'
   } else if (percent >= 80){
        letterGrade = 'B'
    } else if (percent >= 70){
        letterGrade = 'C'
    } else if (percent >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `you got a ${letterGrade} (${percent}%).`
}

studentOne = gradeCalculator(85)
console.log(studentOne)

studentTwo = gradeCalculator(76)
console.log(studentTwo)