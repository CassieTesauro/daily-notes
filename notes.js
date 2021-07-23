// This is a "reference"
const myNotes  = [  //array stored inside
    { //objects stored in my array
        id: 1,  //unique identifier
        subject: "Orientation", //key: value pair aka property
        date: "July sixth",
        feeling: "excited",
        timeSpent: 7
    },
    {
        id: 2,
        subject: "Terminal Basics",
        date: "July Seventh",
        feeling: "happy", //string data type
        timeSpent: 7 //number data type, also an integer
    },
    {
        id: 3,
        subject: "Wireframing and Git",
        date: "July Eighth",
        feeling: "happy",
        timeSpent: 7
    }
] //closing bracket or array

const noteAboutToday = {
        id: 4,
        subject: "DON'T UPDATE COMPUTER!  It will interfere with NSS programs.",
        date: "July sixteenth",
        feeling: "happy",
        timeSpent: 7
}
// myNotes.push(noteAboutToday)
// console.log(myNotes) //now in the notes.js terminal directory I do node notes.js to see the console log.

//chapter 7
// for (const note of myNotes) {
//     console.log(`Note ${note.id}.
//     Today is ${note.date}.
//     My main learning subject was ${note.subject}.
//     I'm feeling really ${note.feeling}!
//     I spent ${note.timeSpent} hours in class.`)   
// }

//chapter9

// const searchTerm = "excited"

// for (const note of myNotes) {
    
//     if (note.feeling === searchTerm) {
//         console.log(`Note ${note.id}.
//         Today is ${note.date}.
//         My main learning subject was ${note.subject}.
//         I'm feeling really ${note.feeling}!
//         I spent ${note.timeSpent} hours in class.`)   
//     }
// }


//Chapter 10

const createNote = (todaysNote) => {
    const lastIndex = myNotes.length - 1
    const currentLastItem = myNotes[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    
    todaysNote.id = idForNewItem
    myNotes.push(todaysNote)
}

const moreNewerNote = {
    subject: "Reviewing materials from last week.",
    date: "July eighteenth",
    feeling: "excited",
    timeSpent: 4
}

createNote(moreNewerNote)


for (const note of myNotes) {
    console.log(`Today is ${note.date} and I feel ${note.feeling}.`)
}