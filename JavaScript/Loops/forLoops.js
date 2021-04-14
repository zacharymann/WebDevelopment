// FOR LOOPS
/*
Syntax Example:

for (1st Statement; 2nd Statement; 3rd Statement){
    CODE TO BE RUN GOES HERE;
}
*/
// 1st Statement only runs at the very beginning
// Code in for loop will run (1st loop)
// 3rd statement will run after each loop and then check ti see if the 2nd statement is still true
// Loop will continue as long as the 2nd statement remains true

//Example 1
for (i = 1; i <= 3; i++){
    console.log(`There's no place like home`);
  };
  /*
  let i = 1;
  i++;
  2
  i++;
  3
  i++
  4
  */

// INFINITE LOOP (Do NOT run this)
/*
for (i = 1; i > 0; i++){
    console.log("THIS WOULD RUN FOREVER")
}
*/

// EXAMPLE 2
for (i = 1; i < 6; i ++){
    console.log(i);
}


console.log("============");

// Example 3 (Counts down from 5 to 0)
for (i = 5; i >= 0; i--){
    console.log(i);
}


console.log("============");

// EXAMPLE 4 (Counts by 2s from 0 to 10 (AKA Even Numbers))
for (i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log("============");

// Example 5 (Counts from 1 to 25)
for (i = 1; i <= 25; i++){
    console.log(i);
}


console.log("============");

// EXAMPLE 6 (Loops through an array)
const topics = [
    `Terminal`,
    `HTML`,
    `CSS`,
    `SASS`,
    `Bootstrap`
  ];

  for (i = 0; i < topics.length; i++){
      console.log(`${i + 1}. ${topics[i]}`);
  }


console.log("============");


// EXAMPLE 7 (Nesting with For Loops)
for (i = 1; i <= 2; i ++) {
    console.log(`Outer Loop`);
    for (x = 1; x <= 3; x++){
        console.log(`Nested Loop`);
    }
}

console.log("============");