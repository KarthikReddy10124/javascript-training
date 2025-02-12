// no dependency
// import React, { useEffect, useState} from 'react'

// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setState(() => state + 1)

//         } , 2000)
//     })
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect


// empty dependency

// import React, { useEffect, useState} from 'react'

// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setState(() => state + 1)

//         } , 2000)
//     } , []) 
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

// // dependenct with value 
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state , setState] = React.useState(0)
//     let [incr , setIncr] = useState(0)

//     useEffect(() => {
//         setIncr(() => state * 2)
//     } , [state])
//   return (
//     <div>
//         {state}
//         <br />
//         <button onClick={() => setState((e) => e +1)}>dont click</button>
//         <br />
//         {incr}
//     </div>
//   )
// }

// export default UseEffect

// fetch api using useEffect hook

import React, { useEffect, useState } from 'react'
import"./useEffect.css"
const UseEffect = () => {
  let [state , setState] = useState([])
    console.log(state);
    

    useEffect( () => {
      window.fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setState(res))
    } , [])
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>image</th>
            </tr>
          </thead>
          {
            state.map((res) => {
              console.log(res);
              return(
                <>
                <tr>
                  <td>{res.id}</td>
                  <td>{res.title}</td>
                  <td> <img src={res.image} alt="" /> </td>
                  </tr>
                  </>
              )
          })
        }
        </table>
      </div>
    )
  }

export default UseEffect
