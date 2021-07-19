import React from 'react'
import Hoc from './Hoc'

function TestChild(Props) {
    console.log(Props)
    return (
        <div>
            <h1>Test Child</h1>
            {Props.userList.map((item,index)=><div key={index}>{item.name}</div>)}
        </div>
    )
}


export default Hoc(TestChild)
