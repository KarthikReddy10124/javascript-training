// iife- Immediate invoking function expression
// --> it will be called immideiately once function object is created.
// --> it is used to avoid polluting the global scope.
// --> it is used to create a closure.
// --> syntax:-
// (expression-function(){})()

// (function()
// {
//     console.log("Hello, I am an IIFE");
// })();
// (() =>{
//     console.log("Hello, I am an IIFE");
// })();  

(function()
{
    console.log("Hello, I am an IIFE");
})();

((a,b) => {
    console.log(a+b);
})(10,10);

(function demo()
{
    console.log("Hello");
})();


// array in js
// --> it is a collection of elements of same data type.
// --> it is an object in js.
// --> it is a mutable data type.
// --> it is a reference type.
// --> it is a hetrogeneous collection.
// --> it is a dynamic collection.  
// two-ways
// declaration way
// let arr = [10, "hello" , true, 1n , undefined];
// console.log(arr);

// // using new keyword
// let arr1 = new Array(10,20,30,40
//     );
//     console.log(arr1);

//objects in js
// --> it is a collection of key-value pairs.
// --> it is a mutable data type.
// --> it is a collection used to store data in the form of key-value pairs.

let obj = {
    name:"Rahul",
    id : 1,
    Boolean : false ,
    undefined : undefined ,
    null : null ,
    arr : [10,20,30] ,
    demo : function(){
        console.log("Hello");
    },
    key : {
        key1 : 24,
    }
}

console.log(obj);
console.log(obj.name);
console.log();
console.log(obj.key);

function obj1(name, id)
{
    this.name = name;
    this.id = id;
}
let p1= new obj1("abc", 1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);