// NESTED FUNCTION
// a function inside another function is called nested function
// function parent()
// {
//     function child()
//     {
//         console.log("iam child fun")
//     }
//     child()
// }
// parent() // calling parent function which inturn calls child function

// var a = 10;
// let b = 20;
// function parent1()
// {
//     var a = "hello"
//     let b = "world"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
// }
// parent1()

// lexical-scope / scope-chaine
// --> the ablity of js-engine search for variable in 
// local-scope if it is not aviable it will 
// start search in global scope

// function main(){
//     let a = 10;
//     function child()
//     {
//         console.log(a);
//     }
//     child();
// }
// main()

//clouser
// a function that has access to its outer function's scope even when the 
// outer function has returned
// the binding of child function to the parent-function.
// or
// the binding of child-function lexical-scope to the parent-function.

// function parent()
// {
//     let a = 10;
//     function child()
//     {
//         console.log(a);
//         }
//         return child;
//         }
//         let child = parent();
//         child(); // output: 10

// note: disadvantage of clouser memory wastage
// whenever we call the child function multiple times ,
//  multiple times clouser will be created in heap area
// and it will be garbage collected when it is not in use.
// so it is not good practice to use clouser in real world application.

function parent()
{
    function child1()
    {
        console.log("i am child1");
        function chil1_1()
        {
            console.log("i am child3");
            }
            return chil1_1;
            }
            function child2()
            {
                console.log("i am child2");
                }
                return [child1,child2]
                }
                parent()[0]()()
                parent()[1]()