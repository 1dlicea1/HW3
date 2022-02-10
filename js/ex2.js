console.log("Ex2");

let weekday = prompt("Enter day of the Week (mon, tue, wed, etc.):");
let inDay;
let nextDay;
let dayCount = 0;

switch (weekday) {
   case 'mon':
      inDay = "Monday"
      nextDay = "Tuesday"
      dayCount++;
     break;
   case 'tue':
      inDay = "Tuesday"
      nextDay = "Wednesday"
      dayCount++;
     break;
   case 'wed':
      inDay = "Wednesday"
      nestDay = "Thursday"
      dayCount++;
     break;
   case 'thu':
      inDay = "Thursday"
      nextDay = "Friday"
      dayCount++;
     break;
   case 'fri':
      inDay = "Friday"
      nextDay = "Saturday"
      dayCount++;
     break;
   case 'sat':
      inDay = "Saturday"
      nextDay = "Sunday"
      dayCount++;
     break;
   case 'mon':
      inDay = "Sunday"
      nextDay = "Monday"
      dayCount++;
     break;
   
   default:
     console.log("Please format day of week with three lowercase letters");
     
 }

 if (dayCount == 1){
 console.log("You entered:", inDay);
 console.log("Tomorrow is:", nextDay);
 }