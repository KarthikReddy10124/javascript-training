// // // let Hoc = (OrginalComponent) => {

// // import { useState } from "react"

// // //     let newComponent = () => {
// // //         return <OrginalComponent name = "shilaa 🫦" />
// // //     }
// // //     return newComponent
// // // }
// // // export default Hoc


// // let Hoc = (OriginalComponent) => {

// //     let newComponent = () => {

// //         let [state , setState] = useState(0)
// //         let demo = () => {
// //             setState (state + 1)
// //         }
// //         return <OriginalComponent state={state} demo = {demo} />
// //     }
// //     return newComponent
// // }
// // export default Hoc

// let Hoc = (OriginalComponent) => {
//         let newComponent = () => {
//             let arr= [10 , 20 , 30 , 40]
            
//             return <OriginalComponent arr1 = {arr} />
//     }
//     return newComponent
// }
// export default Hoc



let Hoc = (OriginalComponent) => {
    let newComponent = () => {
        let arr= [
            {name : "shilaa" , age : 20 , role : "dancer"} ,
            {name : "mena" , age : 21, role : "cleaner"} ,
            {name : "shusila" , age : 22, role : "cooker"} ,
        ]
        
        return <OriginalComponent arr1 = {arr} />
}
return newComponent
}
export default Hoc