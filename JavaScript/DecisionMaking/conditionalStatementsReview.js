// CONDITIONAL STATEMENTS REVIEW
// Conditional statements are used to preform different actions based on different conditions

//IF
//The IF statement executes/runs a block of code if a specified condition is true

// Example 1
if (true) { //Condition/value is true so the code executes and runs
        console.log("Condition was true");
    }

// Example 2
if (false) { //Condition/value is False so the code DOES NOT execute/run
    console.log("Condition was false");
}

// Example 3
if (2 > 0) { // Condition/value is TRUE so the code runs
    console.log("Hello");
}

// ELSE
// The ELSE statement executes a block of code if the specified condition in the preceding IF stataemnt and all preceding ELSE IF statemnts (if there are any) are false

// Example 1
if (false) {
    console.log("If statement was true");
  } else {
    console.log("If statement was false");
  }
  
  // ELSE IF
  // The ELSE IF statement executes a block of code if the specified condition is true and specified condition in the preceding IF statement and all preceding ELSE IF statements (If there are any) are false.
  
  // Example 1
  if (false) {
    console.log("IF WAS TRUE");
  } else if (false) {
    console.log("IF WAS FALSE AND 1ST ELSE IF WAS TRUE");
  } else if (true) {
    console.log("IF WAS FALSE, 1ST ELSE IF WAS FALSE, 2ND ELSE IF WAS TRUE");
  } else {
    console.log("IF WAS FALSE, 1ST ELSE IF WAS FALSE, 2ND ELSE IF WAS FALSE");
  }