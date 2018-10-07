import React from 'react'

const Hello = ({message, handleClick, setMessage}) =>
    <div>
        <h1>Hello {message}</h1>
        <button onClick={() => handleClick()}>click</button>
        <button onClick={() => setMessage("Alice")}>Alice</button>
    </div>

export default Hello