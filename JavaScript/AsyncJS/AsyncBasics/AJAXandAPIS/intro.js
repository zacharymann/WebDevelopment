// AJAX & APIs

// AJAX (Asynchronous Javascript and JSON)
// Asynchronous  Javascript and XML
// AJAX & AJAJ are used to communite with severs (Servers are where we access data from)

// APIs are Application Programming Interface
// Web API is an interface which can be accessed using HTTP Protocol (AKA a URL or Endpoint) to access specific data.

// JSON (JavaScript Object Notation)
// JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a webpage

// Example of changing JSON into JS
// String of JSON
const jokeJSON = `{"id":323,"type":"general","setup":"Why can't you hear a pterodactyl go to the bathroom?","punchline":"The p is silent."}`;
console.log(jokeJSON);
console.log("========");

//JSON.parse changes format from JSON to Javascript
const jokeJS = JSON.parse(jokeJSON);
console.log(jokeJS);
console.log(jokeJS.setup);
console.log(jokeJS.punchline);

