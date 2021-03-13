let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('these are the options for vegans.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('we have great options for both.')
} else {
    console.log('the whole menu is great')
}