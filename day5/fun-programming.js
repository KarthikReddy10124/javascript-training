// function main(task)
// {
//     console.log(task(10 , 10));
// }
// main(function(a,b){
//     return a+b;
//     });
//     main(function(a,b){
//         return a-b;
//         });
//         main(function(a,b){ 
//             return a*b;
//             });

//arrow-function
// it was introduced in ES-6 version 2015(ECMA-SCRIPt)
//used to reduse number of lines in a code

//two type of return
//1. implicit return arrow function
//2. explicit return arrow function
// implicit return arrow function
// -->no need of using return keyword 

// let a = () => console.log("hello");
// // console.log(a);
// a()

// // => fat-arrow

// //2. explicit return arrow function
// // -->need of using return keyword

// let b = () => {return "hello"};
// console.log(b);
// console.log(b());

// let main1 = (task) => {
//     // console.log(task);
//     console.log(task());
// }
// main1(()=>{
//     return "i am cb1"
// })


const main = (task)=>{
    const a = prompt('enter a');
    const b = prompt('enter b');
    console.log(task(a,b));
}
main(function(a,b){
    return a+b;
    });
    main(function(a,b){
        return a-b;
        });
        main(function(a,b){ 
            return a*b;
            });

// let operation = (a , b , task) => {
//     console.log(task(a,b));
// }
// operation(a = Number(prompt("")))