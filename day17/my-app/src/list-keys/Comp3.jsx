import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo = [
        {
            name : "musali",
            id : 1
        },
        {
            name : "saheli",
            id : 2
        },
        {
            name : "komali",
            id : 3
        }
    ]
  return (
    <div>
        <List main = {demo}></List>
    </div>
  )
}

export default Comp3
