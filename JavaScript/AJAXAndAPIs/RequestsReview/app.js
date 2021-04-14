// REQUESTS REVIEW (Fetch and Axios)

// FETCH
// Example 1 (Fetch and Async Await. Chuck Norris API.)
async function fetchChuckNorrisJoke() {
    try {
      const cNJoke = await fetch(`http://api.icndb.com/jokes/random`);
      const cNJokeJS = await cNJoke.json();
      console.log(`Example 1 was Successful`);
      console.log(cNJokeJS);
      const div1 = document.querySelector(`#first`);
      const h3 = document.createElement(`h3`);
      div1.append(h3);
      h3.innerText = cNJokeJS.value.joke;
    } catch (err) {
      console.log(`Example 1 failed`);
      console.log(err);
    }
  }
  fetchChuckNorrisJoke();
  
  // AXIOS
  // Example 2 (Axios and Async Await. Faker API.)
  async function faker1 (){
    try {
      const addresses = await axios.get(`https://fakerapi.it/api/v1/addresses?_quantity=3`);
      console.log(`Example 2 was Successful`);
      console.log(addresses);
      console.log(addresses.data.data[0].city);
      const div2 = document.querySelector(`#second`);
      for (i = 0; i <= 2; i++){
        const h3 = document.createElement(`h3`);
        div2.append(h3);
        h3.innerText = addresses.data.data[i].city;
      }
    } catch (err) {
      console.log(`Example 2 Failed`);
      console.log(err);
    }
  }
  faker1();
  
  // Example 3 (Axios and Async Await. The MealDB API.)
  async function mealDB1(){
    try {
      const meals = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=d`);
      console.log(`Example 3 was successful`);
      console.log(meals);
      const third = document.querySelector(`#third`);
      for (i = 0; i < meals.data.meals.length; i++){
        const h3 = document.createElement(`h3`);
        h3.innerText = meals.data.meals[i].strMeal;
        third.append(h3);
      }
    } catch (err) {
      console.log(`Example 3 Failed`);
      console.log(err);
    }
  }
  mealDB1();