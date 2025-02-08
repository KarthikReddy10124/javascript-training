// import React, { useRef } from 'react'

// const Ref = () => {
//     let demo = useRef()
//     console.log(demo);
//     console.log(demo.current);

//     let demo2 = useRef()
//     console.log(demo2);
//     const handleChange = () => {
//         const backgroundColor = Math.floor(Math.random()*8751285).toString(16);
//         demo2.current.style.backgroundColor = `#${backgroundColor}`
//         // demo2.current.style.backgroundColor = "pink"
//     }

//     demo.current.style.backgroundColor = "yellow"
    
    
//   return (
//     <div>
//         <h1 ref={demo} >olllaa bishes</h1>
//         <h2 ref={demo2} >who likes the dog sound</h2>
//         <button onClick={handleChange}>ah click me</button>
//     </div>
//   )
// }

// export default Ref

import React, { useRef } from 'react'

const Ref = () => {
    let name = useRef('')
    let password = useRef('')

    let demo3 = (e) => {
        e.preventDefault()
        console.log(name.current.value);
        console.log({name :name.current.value});
        console.log({password :password.current.value});
        
        
        
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' ref={name} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' ref={password} />
            <br />
            <button onClick={demo3}>submit</button>
        </form>
    </div>
  )
}

export default Ref
