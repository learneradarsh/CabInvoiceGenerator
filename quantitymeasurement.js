function measurement() {

  /**
   * @function to convert feet into inch
   * @param  {number} number
   */
  function convertFeetIntoInch(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return true;
    }

    //convert feet into inch
    convertedValue = number * 12;
    return convertedValue;
  }

  
  /**
   * @function to convert feet into yard
   * @param  {number} number
   */
  function convertFeetIntoYard(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return true;
    }

    convertedValue = number * (1/3);
    return convertedValue;

  }
  
  /**
   * @function to convert inch into yard
   * @param  {number} number
   */
  function convertInchIntoYard(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return true;
    }

    convertedValue = number * (1/36);
    return convertedValue;
  }
  
  /**
   * @function to convert yard into inch 
   * @param  {number} number
   */
  function convertYardIntoInch(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return true;
    }

    convertedValue = number * 36;
    return convertedValue;
  }
  
  /**@function to convert yard into feet
   * @param  {number} number
   */
  function convertYardIntoFeet(number) {
    let convertedValue = 0;

    //when number is zero
    if (number == 0) {
      return convertedValue;
    }

    //when number is null
    if (number == null) {
      return true;
    }

    //number type check
    if (typeof number != "number") {
      return true;
    }

    convertedValue = number * 3;
    return convertedValue;
  }

  return {
    convertFeetIntoInch,
    convertFeetIntoYard,
    convertInchIntoYard,
    convertYardIntoInch,
    convertYardIntoFeet
  };
}

module.exports = measurement();
