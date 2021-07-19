import React,{useState} from 'react'
import PropTypeChild from './PropTypeChild'

function PropTypeParent() {
    const [name,setName]=useState("Akshay")
    const [marks,setMarks]=useState([{sub:"math",score:88},{sub:"Eng",score:71},{sub:"Sci",score:90}])
    return (
        <div>
            <PropTypeChild name={name} marks={marks} />
            <PropTypeChild />
        </div>
    )
}

export default PropTypeParent
