/*
 * Hello. 2 points.
 */

function hello() {
  // WRITE YOUR EXERCISE 1 CODE HERE
  var p = document.getElementById("output1");
  p.innerHTML = "Hello, AP Computer Science Principles!";
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
  let name = prompt("Please Put Your Name Here!")
  var p = document.getElementById("output2");
  p.innerHTML = "Hello, " + name +"!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  let far = ((cels*1.8)+32).toFixed(2);
  var p = document.getElementById("output3");
  p.innerHTML = cels + " degrees Celsius equals " + far + " degrees Fahrenheit.";
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  let cel = ((fahr-32)/1.8).toFixed(2);
  var p = document.getElementById("output4");
  p.innerHTML = fahr + " degrees Fahrenheit equals " + cel + " degrees Celsius.";
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let miles = 0;
  let yards = 0;
  let feet = 0;
  let inch = 0;

while(inches > 0){
  if(inches >= 63360){
    inches = inches - 63360;
    miles = miles + 1;
  }
  if(inches < 63360 && inches >= 36){
    inches = inches - 36;
    yards = yards + 1;
  }
  if(inches < 36 && inches >= 12){
    inches = inches - 12;
    feet = feet + 1;
  }
  if(inches < 12){
    inches = inches - 1;
    inch = inch + 1;
  }
}
  var p = document.getElementById("output5");
  p.innerHTML = "Miles: " + miles + "<br/>" + "Yards: " + yards + "<br/>" + "Feet: " + feet + "<br/>" + "Inches: " + inch;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilo = 0;
  let met = 0;
  let centi = 0;


while(centimeters > 0){
  if(centimeters >= 100000){
    centimeters = centimeters - 100000;
    kilo = kilo + 1;
  }
  if(centimeters < 100000 && centimeters >= 100){
    centimeters = centimeters - 100;
    met = met + 1;
  }
  if(centimeters < 100){
    centimeters = centimeters - 1;
    centi = centi + 1;
  }
}
  var p = document.getElementById("output6");
  p.innerHTML = "Kilometers: " + kilo + "<br/>" + "Meters: " + met + "<br/>" + "Centimeters: " + centi;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallons = 0;
  let quarts = 0;
  let pints = 0;
  let cups = 0;
  let flounces = 0;

while(fluidOunces > 0){
  if(fluidOunces >= 128){
    fluidOunces = fluidOunces - 128;
    gallons = gallons + 1;
  }
  if(fluidOunces < 128 && fluidOunces >= 32){
    fluidOunces = fluidOunces - 32;
    quarts = quarts + 1;
  }
  if(fluidOunces < 32 && fluidOunces >= 16){
    fluidOunces = fluidOunces - 16;
    pints = pints + 1;
  }
  if(fluidOunces < 16 && fluidOunces >= 8){
    fluidOunces = fluidOunces - 8;
    cups = cups + 1;
  }
  if(fluidOunces < 8){
    fluidOunces = fluidOunces - 1;
    flounces = flounces + 1;
  }
}
  var p = document.getElementById("output7");
  p.innerHTML = "Gallons: " + gallons + "<br/>" + "Quarts: " + quarts + "<br/>" + "Pints: " + pints + "<br/>" + "Cups: " + cups + "<br/>" + "Fluid Ounces: " + flounces;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let ton = 0;
  let pounds = 0;
  let ounce = 0;


while(ounces > 0){
  if(ounces >= 32000){
    centimeters = centimeters - 32000;
    ton = ton + 1;
  }
  if(ounces < 32000 && ounces >= 16){
    ounces = ounces - 16;
    pounds = pounds + 1;
  }
  if(ounces < 100){
    ounces = ounces - 1;
    ounce = ounce + 1;
  }
}
  var p = document.getElementById("output8");
  p.innerHTML = "Tons: " + ton + "<br/>" + "Pounds: " + pounds + "<br/>" + "Ounces: " + ounce;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
