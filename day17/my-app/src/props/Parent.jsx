// import React from "react";
// import Child from "./Child";

// class Parent extends React.Component {
//     state = {
//         username : "mahila"
//     }
//     render()
//     {
//         return (
//             <Child   name = {this.state.username} />
//         )
//     }
// }
// export default Parent


import React from 'react'
import Child from './Child'

const Parent = () => {
    let obj1 = {name : "Saheli" , age : 24}

    let fun = () => {
        window.alert("yo yo yo")
    }
  return (
    <div>
        {/* <Child name="Saheli" age = {24}/> */}
        
            {/* <Child arr = {[10 , 20 , 30]} /> */}
            {/* <Child obj = {obj1} /> */}

            <Child fun1 = {fun} />
        
    </div>
  )
}

export default Parent
