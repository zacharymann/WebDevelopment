// DOM (Document Object Model)
// The DOM is the Object-Oriented (AKA JavaScript) respresentation of a webpage

// SELECTING

// By ID
/*
Syntax Example

document.getElementById('idName');
*/
// getElementById returns the element with the ID attritube of a specified value. (Returns a single element object).

// Example 1
const mainPhoto = document.getElementById(`mainPhoto`);
console.log(mainPhoto); // Show the HTML of the selected element
console.dir(mainPhoto); // Shows the JavaScript object created for the img element

console.log("========");

// Example 2
const history = document.getElementById(`history`);
console.dir(history);

console.log("========");

// Example 3
const directory = document.getElementById(`directory`);
console.dir(directory);

console.log("========");

// By Tag (AKA Element) name
/*
Syntax Example

document.getElementsByTagName('tagName');
*/
// getElementsByTagName returns a collection of all elements with specified tag name as an HTMLCollection  of objects, which is similar to an array.

// Example 1
// Returns an HTMLCollection of two objects (AKA The two b elements)
const boldTags = document.getElementsByTagName('b');
console.dir(boldTags);

// Example 2
// Still returns an HTMLCollection even though there is only of of this tag/element in the HTML file
const body = document.getElementsByTagName('body');
console.dir(body);

// Example 3
const h1 = document.getElementsByTagName(`h1`);
console.dir(h1);

console.log("=========");

// By Class Name
/*
Syntax Example

document.getElementsByClassName('className');
*/
// getElementsByClassName returns a collection of all elements with specified class name, also as an HTMLCollection of objects.

// Example 1
// Returns an HTMLCollection of three objects (AKA The three img elements with the "pic" class)
const pics = document.getElementsByClassName(`pic`);
console.dir(pics);

// Example 2
const sectionHeading = document.getElementsByClassName(`section-heading`);
console.dir(sectionHeading);

// Example 3
const directoryNums = document.getElementsByClassName(`directory-number`);
console.dir(directoryNums);

console.log("========");

// Query Selector
/*
Syntax Example

document.querySelector('selector');
*/
// querySelector returns the first element that matches a specified CSS selector in the document.

// Example 1
// returns only first p element/tag in the document (AKA The HTML file)
document.querySelector("p");
console.dir(p1);

// Example 2
// To select an ID with querySelector you must use the "#" before the ID name
const queryDirectory = document.querySelector(`#directory`);
console.dir(queryDirectory);

// Example 3
// To select a class with querySelector you must use the "." before the class name (Returns only the first element/tag with the "directory-text" class in the document)
const directoryText1 = document.querySelector(`.directory-text`);
console.dir(directoryText1);

// Example 4
// Other CSS Selectors can be used as well (Attribute, Decendant, Nth of type, etc.)
// Example of a Decendant selector (Returns the first h2 nested in a div in the document)
const nestedH2 = document.querySelector(`div h2`);
console.dir(nestedH2);

// Example 5
// Example of an attribute selector (Returns the first img element with an alt attribute value of "Wrigley Field" in the document)
const wrigleyImg = document.querySelector(`img[alt="Wrigley Field"]`);
console.dir(wrigleyImg);

// Query Selector All
/*
Syntax Example

document.querySelectorAll('selector');
*/
// querySelectorAll returns a collection of all elements that match the specified CSS selector in the document as a Node List, which is similar to an array

// Example 1
// Returns every "a" element/tag in the document
const link = document.querySelectorAll(`a`);
console.dir(links);

// Example 2 
const directoryTexts = document.querySelectorAll(`.directory-text`);
console.dir(directoryTexts);

// Example 3
// Example of a multiple selectors selector (Returns all of the a tags/elements and span tags/elements in the document)
document.querySelectorAll(`a, span`)
console.dir(linksAndSpans);