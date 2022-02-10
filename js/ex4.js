console.log("ex4");

let wrong = 0;
let tries = 1;

while (tries <= 3) {
    let userInput = prompt("Enter the password again");
   
    if (userInput == 'secret') {
      
      console.log("You entered the correct password after " + tries + " attempt(s)");
      
      break;
    } else {
      
      wrong++;
    }
    
    tries++;
  }
 
  if (wrong == 3) {
    
    console.log("Your account is locked! You failed to enter the correct password " +
      wrong +" times");
  }