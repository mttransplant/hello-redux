//THe container is responsible for mapping the 1) State and 2) Events

// import React from 'react'
import Hello from '../componenets/Hello'
import {connect} from 'react-redux'

const stateToPropertyMapper = state => ({
    message: state.message
});

//dispatch is a function that is going to be called and determine which action happened and what the parameters are generated.
const actionToPropertyMapper = dispatch => (
    {
        handleClick: () => {
            dispatch({
                type: "CLICK"
            })
        },
        setMessage: (message) => {
            dispatch({
                type: "SET_MESSAGE",
                message: message
            })
        }
    }
);

const HelloContainer = connect(stateToPropertyMapper, actionToPropertyMapper)(Hello)
//the line above takes the stateToProperty Mapper and feeds it into the Hello component
//these must come in the order of state and then action

export default HelloContainer