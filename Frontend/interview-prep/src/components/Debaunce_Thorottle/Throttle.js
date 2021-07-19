import React from 'react'

function Throttle() {
    var timer;
    const handleClick=()=>{
        if(timer){
            clearInterval(timer)
        }
        timer=setInterval(()=>{
            alert("hie")
             console.log("thottle start")},3000)

    }
    return (
        <div>
        <button onClick={()=>handleClick()}>Click me</button>
            
        </div>
    )
}

export default Throttle
