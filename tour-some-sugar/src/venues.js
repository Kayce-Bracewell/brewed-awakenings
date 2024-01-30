import { getVenues, getBookings } from "./database.js";

document.addEventListener(
    "click",
    (clickEvt) => {
        const venueTarget = clickEvt.target
        const allBookings = getBookings()
        
        if (venueTarget.dataset.type === "venue") {
            let tempNameArray = []
            for (const booking of allBookings) {
                if (booking.venueName === venueTarget.dataset.name) {
                    tempNameArray.push(booking.bandName)
                }
            }
            if (tempNameArray.length < 2) {
                window.alert(`${tempNameArray} has this venue booked`)
            }
            else {
                const joinedNameArray = tempNameArray.join(' and ')
                window.alert(`${joinedNameArray} have this venue booked`)
            }
        }
    }
)

const venueList = getVenues()

export const venueHTML = () => {
    let buildVenueHTML = `<ul>`

    for (const venue of venueList) {
        buildVenueHTML += `<li data-name="${venue.name}" data-type="venue" data-id="${venue.id}" class="venue-items">${venue.name}</li>`
    }
    buildVenueHTML += `</ul>`

    return buildVenueHTML
}