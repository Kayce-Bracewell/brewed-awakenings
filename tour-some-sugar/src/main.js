import { bookingHTML } from "./bookings.js";
import { venueHTML } from "./venues.js";
import { buildBandHTML } from "./bands.js";

// This builds the booking section
const buildBookingHTML = bookingHTML()
const bookingTarget = document.querySelector(".booking-spot")

bookingTarget.innerHTML = buildBookingHTML
// Thus ends the booking section

//This builds the venue section
const buildVenueHTML = venueHTML()
const venueTarget = document.querySelector(".venue-spot")

venueTarget.innerHTML = buildVenueHTML
// Thus ends the venue section

// This builds out the band html section
const bandHTML = buildBandHTML()
const bandTarget = document.querySelector(".band-spot")

bandTarget.innerHTML = bandHTML