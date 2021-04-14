// HIGHER ORDER FUNCTIONS
// Passing a function as a parameter/argument into another function

// Exmaple 1  (Passing a prexisting function as a parameter)

//Function Created to pass as an argument into the "print" function
function hello() {
    console.log(`Hello`);
}

function print(greet) {
    // Need to include the parantheses so the function passed in as an argument will run/execute
    greet();
}
// Do NOT include "()" after function name when passing in as an argument. Doing this. Doing this will run/execute the function before it is passed in.
print(hello);

console.log("========");

// EXAMPLE 2
function funcOne(p = function(){
    console.log(`Set a function as the default parameter value`);
}) {
    p();
}
// Runs the function with the default anonymous functoin as the argument for the "p" parameter
funcOne(); 

// Runs the funcOne function wit the "hello" function as the argument
funcOne(hello);

console.log("========");
// Runs/executes the anonymous arrow function that is passed in as the argument
funcOne(() => console.log(`This is an anonymous arrow function`));
