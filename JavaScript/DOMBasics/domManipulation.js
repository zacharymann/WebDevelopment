// DOM Manipulation (Altering elements with JavaScript)

// innerText (The innerText property sets/returns the text content for an element)

// Example 1
const h1 = document.querySelector(`h1`);
console.dir(h1);
// Returns the text value of the h1 and sets it to the h1InnerText variable
const h1InnerText = h1.innerText;
console.log(h1InnerText);

// Example 2
// Sets a new text value for the h1 which is displayed on the webpage
h1.innerText = `The Windy City`;

// Example 3
const p = document.querySelector('p');
// Returns the text value inside of the first p tag/element in the document
const pInnerText = p.innerText;
console.log(pInnerText);

console.log("===========");

// innerHTML (The innerHTML property sets or returns the HTML content of an element)

// Example 1
// Returns the HTML inside of the first p tag/element in the document
const pHTML = p.innerHTML;
console.log(pHTML);

// Example 2
// Sets a new HTML value for the p tag/element which is displayed on the webpage
p.innerHTML = `<h4>Chicago is "My Kind Of Town"</h4>`;

// Example 3
const links = document.querySelectorAll('a');
console.dir(links);
// Sets the value of the innerHTML for the first link to the linkHTML1 variable
const linkHTML1 = links[0].innerHTML;
console.log(linkHTML1);

console.log("===========");

// Example 4
// Displays the HTML of each item in the "links" NodeList (AKA Collection) in the consle of the webpage
for (html of links){
  console.log(html.innerHTML);
}

// Attributes
// Attribute properties set or return the values for the specific attribute

// Example 1
// Returns the href/url value for the first a tag in the document
const firstLink = document.querySelector('a');
const firstLinkHref = firstLink.href;
console.log(firstLinkHref);

// Example 2
// Sets a new href/url value for the first a tag in the document and displays the change on the webpage
firstLink.href = `https://en.wikipedia.org/wiki/Chicago#History`;

// Example 3
// Returns the "src" value for the first image in the document
const mainPhoto = document.querySelector('img');
const mainPhotoSrc = mainPhoto.src;
console.log(mainPhotoSrc);

// Example 4
// Sets a new src value for the first img tag in the document and displays the change on the webpage
mainPhoto.src = `https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`;


// CHANGING CSS STYLES WITH JAVASCRIPT

/*
Syntax for CSS properties in JavaScript (camelCasing)...

font-size would be fontSize in JavaScript
*/

// INLINE STYLING
// Example of inline styling with JavaScript (Styling can be done but it is NOT preferred.)
const h4 = document.querySelector(`h4`);
h4.style.fontSize = `50px`;

// STYLING USING CLASS LIST (Preferred/Better way of styling in JavaScript)
// The Class List property returns the class name(s) of an element. Also, Class List can be used to add, remove, and toggle CSS classes on an element.

const h2 = document.querySelector('h2');

// Example 1
// Displays the classes set to the h2 element in the browser/Chrome console
console.log(h2.classList);

// Example 2
// Adds the class of "text-color" to the h2 element
h2.classList.add(`text-color`);
console.log(h2.classList);

// Example 3
// Removes the "text-color" class from the h2 element
h2.classList.remove(`text-color`)
console.log(h2.classList);

// Example 4
// Adds the "text-color" and "border" classes to the h2 element
h2.classList.add(`text-color`, `border`);
console.log(h2.classList);

// Example 5
// Toggles the "border" class off (AKA Removes the "border" class)
h2.classList.toggle(`border`);
console.log(h2.classList);

// Example 6
// Toggles the "border" class back on (AKA Adds the "border" class)
h2.classList.toggle(`border`);
console.log(h2.classList);

// CREATING ELEMENTS
// New elements can be created with JavaScript

// Example 1
// Creates a new h1 element and sets an innerText value
const newH1 = document.createElement(`h1`);
newH1.innerText = `Chicago is home to great museums like the Field Museum, Shedd Aquarium, Art Institute`;
console.dir(newH1);

// Example 2
// Creates a new ul element and sets an innerHTML value
const newUL = document.createElement(`ul`);
newUL.innerHTML = `<li>The Willis Tower</li>
<li>Wrigley Field</li>
<li>Navy Pier</li>`;
console.dir(newUL)
