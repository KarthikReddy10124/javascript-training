let  a  = document.createElement("h1");
console.log(a);
a.textContent = "hello-world"

document.body.appendChild(a)

a.style.backgroundColor = 'red'

// ----------------------------

//create a div-tag
let div  = document.createElement("div");
console.log(div);

//append div-tag to body-tag
document.body.appendChild(div);

div.style.border = "5px solid"

//create a ol-tag
let ol = document.createElement("ol");
console.log(ol);

//append ol-tag to div-tag
div.appendChild(ol);

//create a li-tag
let li1 = document.createElement("li");
console.log(li1);
li1.textContent = "react"

//append li-tag to ol-tag
ol.appendChild(li1);

//create an li-tag
let li2 = document.createElement("li");
console.log(li2);
li2.textContent = "not react"

//append li-tag to ol-tag
ol.appendChild(li2);

ol.setAttribute("type" , "i")

// create a table
let table = document.createElement("table");
console.log(table);

//append table-tag to body-tag
document.body.appendChild(table);

//creating border for let table-tag
table.setAttribute("border" ,"5px solid");

//create a tr-tag
let tr = document.createElement("tr");
console.log(tr);

//append tr-tag to table-tag
table.appendChild(tr);

//create a td-tag
let td = document.createElement("td");
console.log(td);
td.textContent = "hello";

//append td-tag to tr-tag
tr.appendChild(td);

//create a td-tag
let td2 = document.createElement("td");
console.log(td2);
td2.textContent = "hell";

//append td-tag to tr-tag
tr.appendChild(td2);

