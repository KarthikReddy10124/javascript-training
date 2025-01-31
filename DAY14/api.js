// let obj = {
//     name : "musali" ,
//     id : 1 ,
//     designation : "developer"
// }
// let obj1 = JSON.stringify(obj) 
// console.log(obj1);
// let obj2 = JSON.parse(obj1)
// console.log(obj2);

//3-ways to fetch the json packages
//fetch() method
//AJAX
//XMLHttpRequest
//Axios

window.fetch("data.json")
.then((data) => data.json())
.then((res) => {
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[1]);
    // console.log(res[2]);
    // console.log(res[0].name);

res.map((x) => {
    console.log(x);
    console.log(x.name);
    console.log(x.id);
    console.log(x.designation);

    document.body.innerHTML +=  `<h1>${x.name}</h1>`
    document.body.innerHTML +=     `<h1>${x.id}</h1> `  
    document.body.innerHTML += ` <h1>${x.designation}</h1>`
    
})
})
// fetch cuntry api assignment 