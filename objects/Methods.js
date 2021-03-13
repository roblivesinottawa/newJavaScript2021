let restaurant = {
    name: "Le Forain",
    guestCapacity: 100,
    guestCount: 0,
    // this method checks how many seats are available. it subtracts guestCount from guestCapacity
    checkAvailability: function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    // this method checks how many people will be seated. adds the partySize to the guessCount
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    // this method will show many seats have opened. it subtracts the partySize from the guestCount
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}




restaurant.seatParty(78)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))