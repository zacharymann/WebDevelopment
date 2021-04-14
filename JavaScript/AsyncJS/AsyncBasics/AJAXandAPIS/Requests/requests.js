// *** REQUESTS ***

// XML HTTP REQUEST (A.K.A. XHR)
// The old way of making requests
// XMLHttpRequest is based solely on callbacks (No Promises)

// Example 1
// Creates a new request
const request = new XMLHttpRequest();
// Callback function for a successful request (AKA Resolve)
request.onload = function () {
  console.log(`XHR Was Successful`);
  // Converting the returned data from JSON to JavaScript (NOTE: "this" refers to the "request" object)
  const joke = JSON.parse(this.responseText);
  console.log(joke);
}
// Callback function for a failed request (AKA Reject)
request.onerror = function () {
  console.log(`XHR Was NOT Successful`);
  // "this" represents the error (AKA Catches the error)
  console.log(this);
}
// Opens the Request (Request type/method, URL/Endpoint)
request.open(`GET`, `https://official-joke-api.appspot.com/random_joke`);
// Sends out Request
// request.send();


// FETCH
// The Fetch API allows the web browser to make HTTP requests to web servers
// Fetch is built into Chrome and other browsers
// Fetch requests return a promise that must be consumed

// Example 1 (Only using Proimses)
// Making the request to the server using fetch
fetch(`https://official-joke-api.appspot.com/random_joke`)
  // Consuming returned Promise ("res" holds the value of the returned data)
  .then(res => {
    console.log(`Fetch Example 1 Was Successful`);
    // .json() method converts from JSON to JavaScript and also returns a Promise
    return res.json();
  })
  // Consuming returned Promise ("data" holds the data now in JavaScript object form)
  .then(data => {
    console.log(data);
    console.log(data.setup);
    console.log(data.punchline);
  })
  // Catching error for a failed request
  .catch(err => {
    console.log(`Fetch Example 1 Was NOT Successful`);
    console.log(err);
  });

// Example 2 (Using Async Await)
async function fetchRandomJoke() {
  try {
    // Making the request to the server using fetch
    const jokeJSON = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    console.log(`Fetch Example 2 Was Successful`);
    // .json() method converts from JSON to JavaScript and also returns a Promise which is why the "await" keyword is neccesary
    const joke = await jokeJSON.json();
    console.log(joke);
    // Catching error for a failed request
  } catch (err) {
    console.log(`Fetch Example 2 Was NOT Successful`);
    console.log(err);
  }
}
fetchRandomJoke();

// AXIOS
// Axios is a JavaScript library used to make HTTP requests (Not built into browsers, Must include in your files)
// Axios requests also return a promise that must be consumed
// Axios converts returned data from JSON to JavaScript (NOTE: This is NOT the case with Fetch)

// Example 1 (Only using promises)
// Making the request to the server using Axios
axios.get(`https://official-joke-api.appspot.com/random_joke`)
  // Consuming returned Promise ("res" holds the value of the returned data)
  .then(res => {
    console.log(`Axios Example 1 Was Successful`);
    // With Axios the data requested is inside the "data" property of the returned JavaScript object
    console.log(res.data);
  })
  // Catching error for a failed request
  .catch(err => {
    console.log(`Axios Example 1 Was NOT Successful`);
    console.log(err);
  });

// Example 2 (Using Async Await. The Best Way!)
async function axiosRandomJoke1() {
  try {
    // Making the request to the server using Axios
    const joke = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    console.log(`Axios Example 2 Was Successful`);
    console.log(joke.data);
  // Catching error for a failed request
  } catch (err) {
    console.log(`Axios Example 2 Was NOT Successful`);
    console.log(err);
  }
}
axiosRandomJoke1();

// Example 3 (Using Axios, Async Await, and DOM Manipulation)
const body = document.querySelector(`body`);
const h1 = document.createElement(`h1`);
const h2 = document.createElement(`h2`);
body.append(h1, h2);
// body.append(h1);
// body.append(h2);

async function displayRandomJoke1(){
  try {
    const joke = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    console.log(`Axios Example 3 Was Successful`);
    console.log(joke.data);
    // Displays some of the data received on the webpage
    h1.innerText = joke.data.setup;
    h2.innerText = joke.data.punchline;
  } catch (err) {
    console.log(`Axios Example 3 Was NOT Successful`);
    console.log(err);
  }
}
displayRandomJoke1();

// Example 4 (Using Parameter(s) in a URL/Endpoint)
const h3 = document.createElement(`h3`);
const h4 = document.createElement(`h4`);
body.append(h3, h4);

// Building a URL/Endpoint with parameters
const type = `general`;
// const type = `programming`;
const baseURL = `https://official-joke-api.appspot.com/jokes/${type}/random`;
// const baseURL = `https://official-joke-api.appspot.com/jokes/general/random`;

// SKIPPED TRY AND CATCH FOR THIS EXAMPLE TO SAVE TIME
async function displayRandomJoke2(){
  // Plugging in created URL/Endpoint into the API request
  const joke = await axios.get(baseURL);
  console.log(`Axios Example 4 Was Successful`);
  // Accessing the value of the first item in the array (NOTE: This Jokes API returns an array for this Endpoint/URL request)
  console.log(joke.data[0]);
  h3.innerText = joke.data[0].setup;
  h4.innerText = joke.data[0].punchline;
}
displayRandomJoke2();

// Example 5 (Request with parameters and a query string)
// Building a URL/Endpoint with parameters
const baseEndpoint = `http://api.tvmaze.com/`;
const id = `38963`;
const season = `2`;
const number = `8`;
const episodeSearchURL = `shows/${id}/episodebynumber?season=${season}&number=${number}`
const fullEndpoint = baseEndpoint + episodeSearchURL;

async function getEpisode(){
  const episode = await axios.get(fullEndpoint);
  console.log(`Axios Example 5 Was Successful`);
  console.log(episode.data);
}
getEpisode();
