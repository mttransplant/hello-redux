import React from 'react'
import {connect} from 'react-redux'
import CounterComponent from '../componenets/CounterComponent'

const stateToPropertyMapper = state => ({
    value: state.counterValue
});

const actionToPropertyMapper = dispatch => ({
    plus: () => {dispatch({type: "PLUS"})},
    minus: () => {dispatch({type: "MINUS"})}
});

const CounterContainer = connect(stateToPropertyMapper, actionToPropertyMapper)(CounterComponent)

export default CounterContainer