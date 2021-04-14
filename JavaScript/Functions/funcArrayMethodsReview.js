// FOR EACH, MAP, & FILTER (Array methods that require a function for an argument)

// FOR EACH
const seinfeld = [
  `Jerry`,
  `George`,
  `Elaine`,
  `Kramer`
];

// Example
function names(n){
  console.log(n);
}
// Displays each item value (AKA name) in the seinfeld array in the terminal/console
seinfeld.forEach(names);

console.log("========");

// MAP
const seinfeldEpisodes = [
  {episodeName: `The Old Man`},
  {episodeName: `The Chinese Restaurant`},
  {episodeName: `The Phone Messsage`},
  {episodeName: `The Soup Nazi`},
  {episodeName: `The Strike`}
];

// Example (Using Arrow Function)
showEpisode = episode => episode.episodeName;
// // Adds the key value (AKA Episode Name) for each item in the seinfeldEpisodes array to the new array that is created
const greatEpisodes = seinfeldEpisodes.map(showEpisode);
console.log(greatEpisodes);

console.log("=======");

// FILTER
const customers = [`Jerry`, `George`, `Eliane`];
const soup = function(name){
  return name.length === 6;
}
// Adds the `George` & `Elaine` array values to the new array that is created
const noSoupForYou = customers.filter(soup);
console.log(noSoupForYou);
