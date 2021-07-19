import React from 'react'

function Debounce() {
    var timer;
    const handleClick=()=>{
        clearTimeout(timer)
        timer=setTimeout(()=>{
            // console.log("click")
            alert("hello there!")

        },
        3000)

    }
    return (
        <div>
            <h1>Debounce Demo</h1>
            <button onClick={()=>handleClick()}>click me</button>
        </div>
    )
}

export default Debounce




