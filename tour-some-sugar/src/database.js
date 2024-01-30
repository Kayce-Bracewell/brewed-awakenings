const database = {
    bands: [
        { id: 1, name: "Pink Floyd", membersAmount: 4, genre: "Rock", founded: 1964 },
        { id: 2, name: "Shpongle", membersAmount: 2, genre: "EDM", founded: 1996 },
        { id: 3, name: "Grateful Dead", membersAmount: 4, genre: "Rock", founded: 1965 },
        { id: 4, name: "BBNG", membersAmount: 3, genre: "Jazz", founded: 2010 },
        { id: 5, name: "Leo Pellegrino", membersAmount: 1, genre: "Jazz", founded: 2014 }
    ],
    venues: [
        { id: 1, name: "Viper Room", size: 2100, capacity: 300 },
        { id: 2, name: "Exit In", size: 2500, capacity: 350 },
        { id: 3, name: "Marathon", size: 4000, capacity: 570 },
        { id: 4, name: "Basement", size: 2000, capacity: 290 }
    ],
    bookings: [
        { id: 1, bandName: "Pink Floyd", venueName: "Basement", bookDate: "11/09/2024"},
        { id: 2, bandName: "Shpongle", venueName: "Viper Room", bookDate: "02/03/2024"},
        { id: 3, bandName: "BBNG", venueName: "Exit In", bookDate: "03/23/2024"},
        { id: 4, bandName: "Grateful Dead", venueName: "Marathon", bookDate: "04/20/2024"},
        { id: 5, bandName: "Leo Pellegrino", venueName: "Viper Room", bookDate: "03/13/2024"},
        { id: 6, bandName: "Pink Floyd", venueName: "Marathon", bookDate: "05/16/2024"}
    ],
    bandMembers: [
        { id: 1, firstName: "Syd", lastName: "Barrett", birthYear: 1946, bandRole: "Guitarist/Vocals", bandName: "Pink Floyd"},
        { id: 2, firstName: "Nick", lastName: "Mason", birthYear: 1944, bandRole: "Drummer", bandName: "Pink Floyd"},
        { id: 3, firstName: "Roger", lastName: "Waters", birthYear: 1943, bandRole: "Bassist", bandName: "Pink Floyd"},
        { id: 4, firstName: "Richard", lastName: "Wright", birthYear: 1943, bandRole: "Keyboardist", bandName: "Pink Floyd"},
        { id: 5, firstName: "Raja", lastName: "Ram", birthYear: 1940, bandRole: "Flutist", bandName: "Shpongle"},
        { id: 6, firstName: "Simon", lastName: "Posford", birthYear: 1971, bandRole: "Synthesizer", bandName: "Shpongle"},
        { id: 7, firstName: "Jerry", lastName: "Garcia", birthYear: 1942, bandRole: "Guitarist/Vocalist", bandName: "Grateful Dead"},
        { id: 8, firstName: "Bob", lastName: "Weir", birthYear: 1947, bandRole: "Rhythm Guitarist", bandName: "Grateful Dead"},
        { id: 9, firstName: "Mickey", lastName: "Hart", birthYear: 1943, bandRole: "Drummer", bandName: "Grateful Dead"},
        { id: 10, firstName: "Phil", lastName: "Lesh", birthYear: 1940, bandRole: "Bassist", bandName: "Grateful Dead"},
        { id: 11, firstName: "Leland", lastName: "Whitty", birthYear: 1992, bandRole: "Saxophonist", bandName: "BBNG"},
        { id: 12, firstName: "Alexander", lastName: "Sowinski", birthYear: 1991, bandRole: "Drummer", bandName: "BBNG"},
        { id: 13, firstName: "Chester", lastName: "Hansen", birthYear: 1992, bandRole: "Guitarist/Bassist", bandName: "BBNG"},
        { id: 14, firstName: "Leo", lastName: "Pellegrino", birthYear: 1991, bandRole: "Saxophonist", bandName: "Leo Pellegrino"}
    ]
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}

export const getBandMembers = () => {
    return database.bandMembers.map(bandMembers => ({...bandMembers}))
}