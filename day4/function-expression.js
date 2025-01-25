// //console.log(a()) uncaught reference error will be shown
// let a = function()
// {
//     return "hello world"
// }
// console.log(a());

// create a function expression to perform arthametic operation for three numbers 
// and find largest of three number and input should be taken from the end user.


let main = function()
{
    let num1 = (prompt("enter first number"));
    let num2 = (prompt("enter second number"));
    let num3 = (prompt("enter third number"));
    if(num1>num2 && num1>num3){
        console.log(num1+" is largest number");
    }
    else if(num2>num1 && num2>num3){
        console.log(num2+" is largest number");
        }
        else{
            console.log(num3+" is largest number");
            }
}
main();



// let b = function(a){
//     console.log(a);
//     //console.log(arguments);  all the arguments will be passed 
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// b(10 , 20 , 30)


// function programming 
// ->HIGHER ORDER FUNCTION and CALLBACK FUNCTION.
// -->it is used to perform generic task (multiple task).
// -->it can be created useing function decleration statement or function expression or arrow function.
//      ->HIGHER ORDER FUNCTION:-
//      -a function which accepts another function as an argument or return another function
//      ->CALLBACK FUNCTION:-
//      -a function which is passed as an argument to another function or return from another function.`

// function main(a);
// {
//     console.log(a);
    
// }