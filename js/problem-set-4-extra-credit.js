/*
 * SOLUTION: Hello.
 */

function hello() {
  let result = "Hello, AP Computer Science Principles!"; //Defines variable result as the string of letters
  document.getElementById("output1").innerHTML = result; //Prints the variable result in the paragraph with id output1

  check("hello");
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() {
  let name = prompt("What is your name?"); //sets variable name as the value of the input of a prompt

  let result = "Hello, " + name + "!"; //Sets variable result as the word "Hello" + the value of name
  document.getElementById("output2").innerHTML = result; //Prints result to the paragraph wih id output2

  check("helloAgain", name);
}

/*
 * SOLUTION: Celsius.
 */

function celsius() {
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); //Generates a number between -100 and 1000 and sets variable cels equal to it

  let fahr = cels * 9 / 5 + 32; //Converts the variable cels from celsius to fahrenheit using the equation, and sets fahr equal to it
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; //Sets the variable result to the values of cels and fahr rounded to 2 decimals along with the strings of letters
  document.getElementById("output3").innerHTML = result; //Prints variable result to the paragraph with id output3

  check("celsius", cels);
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); //Generates a random number between -100 and 1000 and sets fahr equal to it

  let cels = (fahr - 32) * 5 / 9;  //Converts fahr to celsius and sets variable cels equal to it
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; //Sets variable result equal to fahr and cels rounded to 2 decimal places, along with the strings of letters
  document.getElementById("output4").innerHTML = result; //Prints the variable result to the paragraph with id output4

  check("fahrenheit", fahr);
}

/*
 * SOLUTION: Inches.
 */

function inches() {
  const MILE = 63360; //Sets constant MILE equal to a constant
  const YARD = 36;  //Sets constant YARD equal to a constant
  const FOOT = 12;  //Sets constant FOOT equal to a constant

  let input = -1; //Sets variable input equal to -1
  while (input < 0) { //Runs this code in a loop when input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs the following code if input is left blank
      break; //Stops the loop
    } else if (Number.isNaN(input)) { //Runs the folllowing code if input is not a number
      input = -1; //Sets input = -1
    } else if (!Number.isInteger(input)) { //Runs the following code if the number is not an integer
      input = -1; //Sets input = -1
    }
  }

  if (input !== null) { //Runs the following code if input does not equal nothing
    let inches = input; //Sets variable inches equal to input
    let miles = Math.floor(inches / MILE); //Sets variable miles equal to inches divided by MILE rounded down
    inches = inches % MILE; //Sets inches equal to the remainder of inches divided by MILE
    let yards = Math.floor(inches / YARD); //Sets variable yards equal to inches divided by YARD rounded down
    inches = inches % YARD; //Sets inches equal to the remainder of inches divided by YARD
    let feet = Math.floor(inches / FOOT); // Sets variable feet equal to inches divided by FOOT rounded fown
    inches = inches % FOOT; //Sets inches equal to the remainder of inches divided by FOOT

    let result = "Miles: " + miles + "<br/>" +
                 "Yards: " + yards + "<br/>" +
                 "Feet: " + feet + "<br/>" +
                 "Inches: " + inches; //Sets variable result equal to a string that identifies the variable and the variabels miles, yards, feet, and inches
    document.getElementById("output5").innerHTML = result; //Prints result to the paragraph with id output5
  } else { //Runs following code if original if statement is false
    document.getElementById("output5").innerHTML = ""; //Prints blank to the paragraph with id output5
  }

  check("inches", input);
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() {
  const KILOMETER = 100000; //Sets KILOMETER equal to 100000
  const METER = 100; //Sets METER equal to 100

  let input = -1; //Sets input = -1
  while (input < 0) { //Runs following code in loop while input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs code if input is blank
      break; //Stops code
    } else if (Number.isNaN(input)) { //Runs code if input is not a number
      input = -1; //Sets input to -1
    } else if (!Number.isInteger(input)) { //Runs code if input is not an integer
      input = -1; //Sets input to -1
    }
  }

  if (input !== null) { //Runs code if input isn't nothing
    let centimeters = input; //Sets centimeters to input
    let kilometers = Math.floor(centimeters / KILOMETER); //Sets kilometers to centimeter/KILOMETER rounded down
    centimeters = centimeters % KILOMETER; //Sets centimeters to the remainder of centimeter/KILOMETER
    let meters = Math.floor(centimeters / METER); //sets meters equal to centimeters/METER rounded down
    centimeters = centimeters % METER; //Sets centimeters to the remainder of centimeters/METER

    let result = "Kilometers: " + kilometers + "<br/>" +
                 "Meters: " + meters + "<br/>" +
                 "Centimeters: " + centimeters; //Sets result equal to a string of words, variables, and line breaks
    document.getElementById("output6").innerHTML = result; //Prints result to paragraph with if output6
  } else { //Runs code if if statement is false
    document.getElementById("output6").innerHTML = ""; //Prints nothing to the paragraph
  }

  check("centimeters", input);
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() {
  const GALLON = 128; //Sets GALLON = 128
  const QUART = 32; //Sets QUART = 32
  const PINT = 16; //Sets PINT = 16
  const CUP = 8; //Sets CUP = 8

  let input = -1; //Sets input = -1
  while (input < 0) { //Runs code whil input < 0
    input = Number(prompt("Enter a non-negative integer.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs code if input is nothing
      break; //Stops code
    } else if (Number.isNaN(input)) { //Runs code if input is not a number
      input = -1; //Sets input = -1
    } else if (!Number.isInteger(input)) { //Runs code if input is not an integer
      input = -1; //Sets input = -1
    }
  }

  if (input !== null) { //Runs code if input is not nothing
    let fluidOunces = input; //Sets fluidOunces equal to input
    let gallons = Math.floor(fluidOunces / GALLON); //Sets gallons equal to fluidOunces/GALLON rounded down
    fluidOunces = fluidOunces % GALLON;//Sets fluidOunces = the remainder of fluidOunces/GALLON
    let quarts = Math.floor(fluidOunces / QUART); //Sets quarts = fluidOunces/QUART rounded down
    fluidOunces = fluidOunces % QUART; //Sets fluidOunces = the remainder of fluidOunces/QUART
    let pints = Math.floor(fluidOunces / PINT); //Sets pints = fluidOunces/PINT rounded down
    fluidOunces = fluidOunces % PINT; //Sets fluidOunces = the remainder of fluidOunces/PINT
    let cups = Math.floor(fluidOunces / CUP); //Sets cups = fluidOunces/CUP rounded down
    fluidOunces = fluidOunces % CUP; //Sets fluidOunces = the remainder of fluidOunces/CUP

    let result = "Gallons: " + gallons + "<br/>" +
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces; //Sets result equal to a string of words, variables, and line breaks
    document.getElementById("output7").innerHTML = result; //Prints result to paragraph with id output7
  } else { //Runs code if if statement is false
    document.getElementById("output7").innerHTML = ""; //Prints nothing to paragraph
  }

  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000; //Sets TON = 32000
  const POUND = 16; //Sets POUND =16

  let input = -1; //Sets input = -1
  while (input < 0) { //Runs code while input < 0
    input = Number(prompt("Enter a non-negative integer.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs code if input is nothing
      break;//Stops code
    } else if (Number.isNaN(input)) { //Runs code if input is not a number
      input = -1; //Sets input = -1
    } else if (!Number.isInteger(input)) { //Runs code if input is not an integer
      input = -1; //Sets input = -1
    }
  }

  if (input !== null) { //Runs code if input is not nothing
    let ounces = input; //Sets ounces = input
    let tons = Math.floor(ounces / TON); //Sets tons = ounces/TON rounded down
    ounces = ounces % TON; //Sets ounces = the remainder of ounces/TON
    let pounds = Math.floor(ounces / POUND); //Sets pounds = ounces/POUND rounded down
    ounces = ounces % POUND; //Sets ounces = the remainder of ounces/POUND

    let result = "Tons: " + tons + "<br/>" +
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces; //Sets result = to a string of words, variables, and line breaks
    document.getElementById("output8").innerHTML = result; //Prints result to paragraph with id output8
  } else { //Runs code if if statement is false
    document.getElementById("output8").innerHTML = "";  //Prints nothing to the paragraph
  }

  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100; //Sets DOllAR = 100
  const QUARTER = 25; //Sets QUARTER = 25
  const DIME = 10; //Sets DIME = 10
  const NICKEL = 5; //Sets NICKEL = 5

  let input = -1;//Sets input = -1
  while (input < 0) { //Runs code while input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs code if input is nothing
      break; //Stops code
    } else if (Number.isNaN(input)) {  //Runs code if input is not a number
      input = -1; //Sets input = -1
    } else if (!Number.isInteger(input)) { //Runs code if input is not an integer
      input = -1; //Sets input = -1
    }
  }

  if (input !== null) { //Runs code if input is not nothing
    let pennies = input; //Sets pennies = input
    let dollars = Math.floor(pennies / DOLLAR); //Sets dollars = pennies/DOLLAR rounded down
    pennies = pennies % DOLLAR; //Sets pennies = the remainder of pennies/DOLLAR
    let quarters = Math.floor(pennies / QUARTER); //Sets quarters = pennies/QUARTER rounded down
    pennies = pennies % QUARTER; //Sets pennies = the remainder of pennies/QUARTER
    let dimes = Math.floor(pennies / DIME); //Sets dimes = pennies/DIME rounded down
    pennies = pennies % DIME; //Sets pennies = the remainder of pennies/DIME
    let nickels = Math.floor(pennies / NICKEL); //sets nickels = pennies/NICKEL rounded down
    pennies = pennies % NICKEL; //Sets pennies = the remainder of pennies/NICKEL

    let result = "Dollars: " + dollars + "<br/>" +
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies; //Sets result = to a string of words, variables, and line breaks
    document.getElementById("output9").innerHTML = result; //Prints result to paragraph with id output9
  } else { //Runs code if if statement is false
    document.getElementById("output9").innerHTML = ""; //Prints nothing to the paragraph
  }

  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25; //Sets QUARTER equal to 25
  const DIME = 10; //Sets DIME equal to 10
  const NICKEL = 5; //Sets NICKEL equal to 5

  let input = -1; //Sets input = -1
  while (input < 0 || input >= 1) { //Runs code while input is less than 0 or greater than or equal to one
    input = Number(prompt("Enter a non-negative number less than 1.00.")); //Prompts user for input and converts to number if possible and sets input equal to it

    if (input === null) { //Runs code if input is nothing
      break; //Stops code
    } else if (Number.isNaN(input)) { //Runs code if input is not a number
      input = -1; //Sets input = -1
    }
  }

  if (input !== null) { //Runs code if input is not nothing
    let pennies = input; //Sets pennies equal to input
    pennies = Number((pennies * 100.00).toFixed(0)); //Sets pennies equal to pennies*100 with no decimal places
    let quarters = Math.floor(pennies / QUARTER); // sets quarters equal to pennies/QUARTER rounded down
    pennies = pennies % QUARTER; //Sets pennies equal to the remainder of pennies/QUARTER
    let dimes = Math.floor(pennies / DIME); //Sets dimes equal to pennies/DIME rounded down
    pennies = pennies % DIME; //Sets pennies equal to the remainder of pennies/DIME
    let nickels = Math.floor(pennies / NICKEL); //Sets nickels equal to pennies/NICKEL rounded down
    pennies = pennies % NICKEL; //Sets pennies equal to the remainder of pennies/NICKEL

    let coins = quarters + dimes + nickels + pennies; //Sets variable coins equal to quarters + dimes + nickels + pennies
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins."); //Prints variable coins plus the word "coin." if coins equals 1 or variable coins plus the word "coins." if coins is greater than one to the paragraph with id output10
  } else { //Runs code if original if statement is false
    document.getElementById("output10").innerHTML = ""; //Prints nothing to the paragraph with id output10
  }

  check("change", input);
}
