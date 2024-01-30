import { getBands, getBookings } from "./database.js";

document.addEventListener(
    "click",
    (clickEvt) => {
        const bookingTarget = clickEvt.target;
        const getAllBands = getBands();
        
        if (bookingTarget.dataset.type === "booking") {
            let buildDisplayString = ""
            for (const band of getAllBands) {
                if (bookingTarget.dataset.bandname === band.name) {
                    buildDisplayString += `${band.name}\n${band.genre}\nFormed in ${band.founded}\n${band.membersAmount} band members`
                }
            }
            window.alert(`${buildDisplayString}`)
        }
    }
)

const bookingList = getBookings();

export const bookingHTML = () => {
   let buildingHTML = `<ul>`

   for (const booking of bookingList) {
    buildingHTML += `<li data-bandname="${booking.bandName}" data-type="booking" data-id="${booking.id}" class="booking-items">${booking.bandName} are playing at ${booking.venueName} on ${booking.bookDate}</li>`
   }
   buildingHTML += `</ul>`

   return buildingHTML
}