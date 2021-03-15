const userAge = 20
const message = userAge >= 18 ? 'you can vote' : 'you cannot vote'


// if (userAge >= 18) {
//     message = 'you are eligible to vote'
// } else {
//     message = 'you are not eligible to vote'
// }

console.log(message)

// with ternary and arrow function

const myAge = 34
const showPage = () => 'showing the page'
const showErrorPage = () => 'showing the error page'

const msg = myAge >= 21 ? showPage() : showErrorPage()
console.log(msg)

// old way

let age

function show_page(){
    console.log('showing the page')
}
function show_error_page(){
    console.log('showing the error page')
}
function check_age(age){
    if (age >= 21) {
        show_page()
    } else {
        show_error_page()
    }
   
}

check_age(20)



