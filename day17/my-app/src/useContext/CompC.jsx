// import React from "react"
// import { user } from "./CompA"
// import { id } from "./CompA"
// const CompC = () => {
//   return (
//     <div>
//     {
//         <user.Consumer>
        
//             {
//                 (name)=>{
//                     return(
//                         <>
//                             {
//                                 <id.Consumer>
//                                     {
//                                         (id)=>{
//                                             return(
//                                                 <>
//                                                 <h1> {name}</h1>
//                                                 <h1>{id}</h1>
//                                                 </>

//                                             )
//                                         }
//                                     }
//                                 </id.Consumer>
//                             }
//                         </>
//                     )
                    
//                 }
//             }
//         </user.Consumer>
//     }
//     </div>
//   )
// }

// export default CompC


import React, { useContext } from 'react'
import { userName , id} from './CompA'


const CompC = () => {
    let name = useContext(userName)
    let id1 = useContext(id)
  return (
    <div>
        {name} and {id1}
    </div>
  )
}

export default CompC
