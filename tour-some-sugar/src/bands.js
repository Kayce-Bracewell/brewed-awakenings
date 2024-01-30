import { getBands, getBookings, getBandMembers } from "./database.js";

document.addEventListener(
    "click",
    (clickEvt) => {
        const bandTarget = clickEvt.target
        const getAllBookings = getBookings()
        const bandMembers = getBandMembers()

        if (bandTarget.dataset.type === 'band') {
            let tempVenueArray = []
            for (const booking of getAllBookings) {
                if (booking.bandName === bandTarget.dataset.name) {
                    tempVenueArray.push(booking.venueName)
                }
            for (const member of bandMembers) {
                if (member.bandName === bandTarget.dataset.name) {
                    if (tempVenueArray.length < 2) {
                        window.alert(`${bandTarget.dataset.name} is playing at ${tempVenueArray}`)
                    }
                    else {
                        const joinedVenueArray = tempVenueArray.join(' and ')
                        window.alert(`${bandTarget.dataset.name} is playing at ${joinedVenueArray}`)
                    }
                }
            }
            }
            
        }
    }
)

const bandList = getBands();

export const buildBandHTML = () => {
    let buildBandString = `<ul>`

    for (const band of bandList) {
        buildBandString += `<li data-name="${band.name}" data-type="band" data-id="${band.id}" class="band-list-item">${band.name}</li>`
    }
    buildBandString += `</ul>`

    return buildBandString
}