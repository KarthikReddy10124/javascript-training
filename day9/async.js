// asynchroud function
// -->making a way for other function to execut first.

// two methods
// 1. setTime out (callback function , delay-time)
// 2. setInterval(cbf , delay-time)
// present inside window object

// window.setTimeout(() => {
//     console.log("setTimeout");
// },4500)
// // 4500ms = 4.5sec
// window.setInterval(() => {
//     console.log("Interval");
// },3500)

// function main(m,n) {
//     setTimeout(() => {
//         for(let i=m; i<=n; i++)
//         {
//             console.log(i);
//         }
//     },5000)
// }
// main(1,10)
// // main(1 , "10a")

// function demo()
// {
//     console.log("demo");
// }
// demo()


// promise
// --> used to look after async function
// --> a way to handle asynchronous operation
// --> a way to handle the result of asynchronous operation
// --> a way to handle the error of asynchronous operation

//3-phase
// 1. pending
// 2. resolved / fulfill 
// 3. rejected


//                       |-------Pending(either it will be resolve or reject) 
//                       |
//                       |   
//pending----------------|-------Resolve(async fun working properly)
//                       |       .then(cbf)
//                       |
//                       |
//                       |-------Reject (async fun not working prpoerly)
//                               .catch(cbf)
// syntax
// new Promise((resolve, reject) => {
//   --async-fun-code
// })
// .then(cbf)
//  .catch(cbf)

// let online = window.navigator.onLine

// new Promise((resolve , reject) => {
//     setTimeout(() => {
//         if(online === true){
//             return resolve()
//         }else{
//             return reject()
//         }
//     } , 2000)
// })
// .then(() => console.log("online ... 😍😎😗")
// )
// .catch(() => console.log("of-line ...🤷‍♂️😢🥲")
// )


function main(m,n) {
    setTimeout(() => {
        for(let i=m; i<=n; i++)
        {
            console.log(i);
        }
    },5000)
}
main(1,10)
// main(1 , "10a")

function demo()
{
    console.log("demo");
}
demo()