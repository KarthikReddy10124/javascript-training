// import React, { useState } from 'react'

// const State = () => {
//     const [state ,setState] = useState("namasthe");

//   return (
    
//     <div>
//       <h1>{state}</h1>
//       <button onClick={()=> setState("Greetings") }>Translate to english  </button>
//     </div>
//   )
// }

// export default State


// import React from 'react'
// import { useState } from 'react'

// const State = () => {
//   let [name, setName] = useState()
//   let [password, setPassword] = useState()
//   function demo(e){
//     e.preventDefault()
//     console.log(name,password)
//     name==='admin' && password==='123' ? window.open('https://www.youtube.com/watch?v=_EFaYSR8JWI'):window.location.reload()
//   }
//   return (
//     <div>
//       <form action="">
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" value={name} 
//         onChange={(e)=>setName(e.target.value)} />

//         <br />
//         <label htmlFor="password">PASSWORD:</label>
//         <input type="password" name="password" value={password} 
//         onChange={(e)=>setPassword(e.target.value)} />

//         <br />
//         <button onClick={demo}>SUBMIT</button>
//       </form>
//     </div>
//   )
// }

// export default State;

// import React, { useState } from 'react';
// import video1 from "./video1.mp4"


// const State = () => {
//   let [state, setState] = useState(true);

//   let demo = () => {
//     let demo1 = document.getElementById('demo');
//     console.log(demo);
//     setState(!state);
//     state === true ? demo1.play() : demo1.pause();
//   };

//   return (
//     <div>
//       <video src={video1} height="300px" id="demo" onClick={demo}></video>
//     </div>
//   );
// };

// export default State;