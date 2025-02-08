// import React, { Fragment } from 'react'

// const List = () => {
//     let arr = [10 , 20 , 30 , 40]
//     console.log(arr);
//     let num = 0 
//     console.log(num);
//   return (
//     <Fragment>
//         {
//             arr.map((x) => {
//                 console.log(`<li key=${num++}>${x}</li>`);
                
//                 return(
//                     <li key={num++}>{x}</li>
//                 )
//             })
//         } 
//     </Fragment>
//   )
// }

// export default List


import React, { Fragment } from 'react'

const List = (props) => {
    console.log(props);
    console.log(props.main);    
  return (
    <Fragment>
        <ol >
        {
            props.main.map((x) => {
                console.log(x.id);
                return(
                    
                        <li key= {x.id}> {x.name}</li>
                    
                )
        })
    }
    </ol>
    </Fragment>
    )
}

export default List
    