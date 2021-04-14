// ASYNC AWAIT
// Async makes a function return a promise. Also, lets our JavaScript know the function we are creating has asynchronous code inside of it.
// Await makes a function wait for a promise

// Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
div1.append(p1);

function getUserInfo(email){
  // A Promise takes one parameter which is a function with two parameters (Resolve & Reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  });
}

async function example1(){
  // Awaits (AKA Waits) for the function to return a value before moving on the the next line in the example1 function
  const e = await getUserInfo(`me@gmail.com`);
  p1.innerText = e;
}
example1();

// Example 2
const second = document.querySelector(`#second`);
const p2 = document.createElement(`p`);
second.append(p2);

function getRandomMovie(movie){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movie);
    }, 3000);
  });
}

async function example2(){
  const m = await getRandomMovie(`Matilda`);
  p2.innerText = m;
}
example2();

// Example 3
const third = document.querySelector(`#third`);
const p3 = document.createElement(`p`);
third.append(p3);
const p4 = document.createElement(`p`);
third.append(p4);

function getShowInfo(showTitle){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(showTitle);
    }, 4000);
  });
}
function getReleaseDate(title){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Jan 15, 2021`);
    }, 1000);
  });
}

async function example3(){
  const t = await getShowInfo(`WandaVision`);
  p3.innerText = t;
  const d = await getReleaseDate(t);
  p4.innerText = d;
}
example3();

// Example 4
const fourth = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
fourth.append(p5);

function response(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Using the received variable to determine whether we received the data we are pretending we requested
      let received = true;
      if (received){
        resolve(`Received Data: ${data}`);
      } else {
        reject(`Failed. Did not receive data.`);
      }
    }, 2000);
  });
}

async function example4(){
    try {
        const s = await response(`Password123`);
        p5.innerText = s;
    } catch (err) {
        p5.innerText = err;
    }
}
example4();
