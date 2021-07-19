import React ,{useRef}from 'react'

function Test() {
    const myref=useRef(" ")
    const handleClick=()=>{
        // console.log(myref.current)
        myref.current.value="updated my text"

    }
    return (
        <div>
            <input type="text" ref={myref} />
            <button onClick={handleClick}>Click ME</button>
        </div>
    )
}

export default Test
