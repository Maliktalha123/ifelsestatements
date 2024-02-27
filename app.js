var age = parseInt(prompt("Enter your age:"));

var ticketPrice;

if (age < 12) {
  ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
  var isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

  if (isStudent === "yes") {
    ticketPrice = 8;
  } else {
    ticketPrice = 10;
  }
} else {
  ticketPrice = 12;
}

alert("The ticket price is $" + ticketPrice);
