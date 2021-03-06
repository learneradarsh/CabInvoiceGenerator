/**
 * to find sum of a and b
 * @param  {number} a
 * @param  {number} b
 */
function sum(a, b) {
  //Case 1: Check the function for no arguments
  if (a == "" || b == "") {
    return true;
  }

  //Case 2: Check the function for partial arguments
  if (typeof a === undefined || typeof b === undefined) {
    return true;
  }

  //Case 3: Check the function for valid integer arguments
  if (isNaN(a) || isNaN(b)) {
    return true;
  }

  //Case 4: Check the function for sum of 2 valid integers
  let c = a + b;
  return c;
}

//Export the function
module.exports = sum;
