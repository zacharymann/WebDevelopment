// SPREAD
//Spreads/copies of one array or object into another array or object

/*
Syntax Example

...dataStructure
*/

// SPREAD WITH ARRAYS
// Example 1
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const bothNums = [...nums1, ...nums2];
console.log(bothNums);

// Example 2
// Spreads/copies the contents of the places array into the placesAndMore array. Also, adding another value (`church`) to the placesAndMore array
const places = [`home`, `work`, `store`];
const placesAndMore = [...places, `church`]
console.log(placesAndMore);

// Example 3
const me = [`Matt`];
const laurenAndMe = [`Lauren`, ...me];
console.log(laurenAndMe);
const theFam = [`Meredith`, `Wendy`, ...laurenAndMe];
console.log(theFam);

// SPREAD WITH OBJECTS
// Example 1
const chicagoTeams1 = {
  football: `Da Bears`,
  hockey: `Blackhawks`
};
const chicagoTeams2 = {
    basketball: `Bulls`,
    soccer: `Fire`
};
const allChicagoTeams = {
    ...chicagoTeams1,
    ...chicagoTeams2
};
console.log(allChicagoTeams);

// Example 2
// When there is a duplicate key name the object that is spread last will set the value for the key
const baseballTeams1 = {
    bowlingGreen: `Hot Rods`,
    chicago: `Cubs`
};
const baseballTeams2 = {
    chicago: `White Sox`,
    lexington: `Legends`
}
const allBaseballTeams = {
    ...baseballTeams1,
    ...baseballTeams2
};
console.log(allBaseballTeams);

// Example 3
const spiderman = {spiderman: `Peter Parker`}
const spidermen = {
    ...spiderman,
    anotherSpiderman: `Miles Morales`
};
console.log(spidermen);
const spiderpeople = {
    ...spidermen,
    spiderGwen: `Gwen Stacy`
};
console.log(spiderpeople);