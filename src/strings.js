// - Capitalize the first letter of each word in a sentence
// - Greeting function that says 'Hello, usersname'

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter('gitWorkin'));


export function greet(username) {
    return("Hello, " + username );
  }
  
  console.log(greet("EvalynLedezma"));