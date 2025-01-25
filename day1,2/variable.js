// JavaScript
// -it is a object based and object oriented programming language used to convert static page into dynamic page.

// data types:-
//   it is a value used in programming language. two types:-	 
//   1)primitive
//   2)non-primitive

// PRIMITIVE:-
// -number
// -string
// -Boolean
// -undefined
// -null
// -big-it

// Non-PRIMITIVE:
// -class
// -object
// -array
// -functions
// -sets

// SCOPES

// -global-scope
// -local-scope/script-scope
// -block-scope
// {
//   variables
// }

// 3-types

// -var
// -let 
// -const

// ->operators
// ---it is a pre-defined symbols used to perform specific operations

// 1) Arithmetic -operations (+.
// //increment
// -->post-increment (after)

// first value is assigned
// then increments

// eg:-
// let a = 10;
// console.log(a); //10
// console.log(a++) 10
// console.log(a++) 11

// -->pre-increment (before)
// !
// first increment done
// then value is assigned 
// eg:







// 2) assignment operator (shot-hard)
// -> (+=,-=,*=,%=)
// eg:- 
// var c =10;
// console.log(c);
// c=c+10 --> c+=10;

// 3) logical operators
// -> AND(&&)
// -> OR (||)
// -> NOT (!)

// 4) relational operators 
// -> ( < , <= , > , >= , == , === , !=)
// eg:- 
// console.log(5==5) //true
// console.log(5=="5")//true == checks only the value not the datatype

// console.log(5===5) //true
// console.log(5==="5") //false  === checks the value & datatype

// 5)Ternary operator
// -->it will accept three operands
// syntax:-
// (condition) ? true-statement : false-statement



// conditional statements
// ----------------------

// they are used to make some decision based on some condition

// >simple-if
// >if-else
// >else-if-else (else-if-ladder)
// >nested if
// >switch

// -->simple-if
// simple-if (only have true statement)
// if(5<=10)
// {
// console.log("hello world");
// }

// if-else
// if(5<=10)
// {
// console.log("hello world");
// }else{
// console.log("Bye");
// }

// else-if-else (else-if ladder):-
// let a = 20;
// let b = 30;
// let c = 40;

// if(a>=b && a>=c){
// console.log("a is greater");
// }else if(b>=a && b>=c){
// console.log("b is greater");
// }else{
// console.log("c is greater");
// }

// Nested if:-

// let user = "admin";
// let password = 12345;

// if(user==="admin"){
// console.log("user valid");
//    if(password === 12345){
// 	console.log("password valid");
//    else{
// 	console.log("Password invalid");
// }
// }else{
// console.log("login unsuccessfull");
// }

// switch:-

// switch(n)
// {
// case 1:
// {
// console.log("Print 1");
// }break;
// case 2:
// {
// console.log("Print 2");
// }break;
// default{
// console.log("Invalid");
// }
// }