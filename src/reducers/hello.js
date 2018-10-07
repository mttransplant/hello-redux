// import React from 'react'

const hello = (state, action) => {
//the state is where this is going to start
//then action will be the instructions on what to do next
//The action object MUST have at least one attribute, of "type"

    switch (action.type) {
        case "CLICK":
            return {
                message: "Button Clicked"
            }
        case "SET_MESSAGE":
            return {
                message: action.message
            }
        default:
            return {
                message: 'World'
            }
    }

}
export default hello