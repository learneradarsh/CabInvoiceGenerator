/**
 * to convery feet into inch
 * @param  {} number
 */
function convertFeetIntoInch(number){
    
    console.log("Welcome to Quantity Measurement");

    //when number is zero    
    if(number == 0){ return 0; }

    //when number is null
    if(number == null) { return  true; }

    //number type check
    if(typeof(number) != "number") { return false; }


}

module.exports = convertFeetIntoInch;