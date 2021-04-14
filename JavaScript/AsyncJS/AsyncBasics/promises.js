// PROMISES
// A Promise is an object representing the eventually completion or failure of an asynchronous operation (A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function)

// Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
div1.append(p1);

function getUserInfo(email) {
  // A Promise takes one parameter which is a function with two parameters (Resolve & Reject)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  });
}
// The ".then" is the eqiuvalent to the callback function created using callbacks
getUserInfo(`me@gmail.com`)
  .then(e => p1.innerText = e);
// Or
// getUserInfo(`me@gmail.com`).then(e => p1.innerText = e);

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
getRandomMovie(`Matilda`)
  .then(m => p2.innerText = m);

// Example 2.5
const p = new Promise((resolve, reject) => {
  resolve();
});
p.then(() => console.log(`This is a basic promise`));

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
getShowInfo(`WandaVision`).then(t => {
    p3.innerText = t;
    return getReleaseDate(t);
  }).then(d => p4.innerText = d);

// Example 4
const fourth = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
fourth.append(p5);

function response(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Using the received variable to determine whether we received the data we are pretending we requested
      let received = false;
      if (received){
        resolve(`Received Data: ${data}`);
      } else {
        reject(`Failed. Did not receive data.`);
      }
    }, 2000);
  });
}
response(`Password123`)
  // Code in ".then" runs when request is successful (AKA Resolved)
  .then(s => p5.innerText = s)
    // Code in ".catch" runs when request is NOT successful (AKA Rejected)
  .catch(f => p5.innerText = f);