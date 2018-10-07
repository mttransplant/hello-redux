import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import Hello from "./componenets/Hello";
import hello from "./reducers/hello"
import HelloContainer from "./containers/HelloContainer"
import CounterComponent from "./componenets/CounterComponent";
import CounterContainer from "./containers/CounterContainer"
import counter from './reducers/counter'

// const store = createStore(hello)
const store = createStore(counter)

// ReactDom.render (
//
//     <CounterComponent/>,
//     document.getElementById('root')
// )

ReactDom.render (
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
)



// ReactDom.render (
//
//     {/*<Provider store={store}>*/}
// {/*<HelloContainer/>*/}
// {/*</Provider>,*/},
//     document.getElementById('root')
// )