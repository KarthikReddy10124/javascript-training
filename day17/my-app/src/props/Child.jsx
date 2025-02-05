// import React from "react";

// class Child extends React.Component {
//     render()
//     {
//         return (
//             <>
//                 <h1>you are {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child;


import React from 'react'

const Child = (props) => {
    // // console.log(props.obj.name);
    // let {name , age } = props.obj
    // // console.log(name);
    // console.log(age);
    
    
  return (
    <div>
        {/* <h1>she is my khaas {props.name}</h1>
        <h2>am not that old am just {props.age}</h2> */}
        {/* <h1>{props.arr}</h1> */}
        {/* <h1>{name}</h1>
        <h1>{age}</h1> */}
        <button onClick={() => props.fun1()}>click</button>
    </div>
  )
}

export default Child

