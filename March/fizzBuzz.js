// Conditions:
// ===== console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// ===== logs fizz instead of the number for multiples of 3
// ===== logs buzz instead of the number for multiples of 5
// ===== logs fizzbuzz for numbers that are multiples of both 3 and 5

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
      let response = "";
  
      if (i % 3 === 0) {
        response = "fizz";
      } // multiple of 3
  
      if (i % 5 === 0) {
        response += "buzz";
      } // multiple of 5
  
      if (i % 3 !== 0 && i % 5 !== 0) {
        response = i;
      } // neither
  
      console.log(response);
    }
  }
  
  fizzBuzz(15);
  