// NESTING WITH DATA STRUCTURES

// ARRAY NESTING
const movies = [
    ["Back to the Future", "Up"],
    ["Pacific Rim", "Treasure of the Sierra Madre"],
    [
        ["Ray", "Godfather"],
        "IT"
    ]
]

console.log(movies[0][0]); //Displays "Back to the Future"
console.log(movies[2][0][1]); //Displays "Godfather"

// OBJECT NESTING
const fellowship = {
    theTrio: {
        legolas: "Elf",
        gimli: "Dwarf",
        aragorn: "Human"
    },
    rohan: {
        kingTheodan: "King",
        eomer: "Rider"
    }
};

console.log(fellowship["theTrio"]["gimli"]);//Displays "Dwarf"
console.log(fellowship["rohan"]["eomer"]);//displays "Rider"
console.log(fellowship.rohan.eomer);

//Mix of Array and Object Nesting
const marvelHeroes = {
    withPowers: [
        "Hulk",
        "Thor",
        "Spider-man",
        "Captain America"
    ],
    withoutPowers: [
        "Hawkeye",
        "Black Widow",
        "Iron Man"
    ]
};

console.log(marvelHeroes.withPowers[3]); //Displays "Captain America"
console.log(marvelHeroes.withoutPowers[0]); //Displays "Hawkeye"