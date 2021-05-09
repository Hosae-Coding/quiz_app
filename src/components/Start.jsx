import React, { useRef } from 'react'

export default function Start({setUsername}) {
    const handleClick =()=>{
        inputRef.current.value && setUsername(inputRef.current.value)

    }
    const inputRef= useRef()
    return (
        <div className="start">
            <input placeholder="Nickname" className="startInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Lets start!</button>
            
        </div>
    )
}
