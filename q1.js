'use strict'
var arrayOfNumber = [0,2,5,7,9];
var number1 = 3;
function greaterThan(){
    for (var i = 0 ; i < arrayOfNumber.length ; i++){
        if (arrayOfNumber[i] > number1){
            console.log(arrayOfNumber[i]);
        }
        // else {
        //     console.log('the number is less than!');
        // }
    }
    return(arrayOfNumber,number1);
}
greaterThan();