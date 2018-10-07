import React from 'react'

const CounterComponent = ({value = 0, plus, minus}) =>
    <div>
        <span>{value}</span>
        <button onClick={() => plus()}> + </button>
        <button onClick={() => minus()}> - </button>
    </div>

export default CounterComponent