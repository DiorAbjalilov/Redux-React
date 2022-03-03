import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
const App = () => {
  const counter=useSelector(state=>state.counter)
  const login=useSelector(state=>state.isLogged)
  const dispatch=useDispatch()
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={()=>dispatch(increment(5))} >+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {login ? <p>log in</p>:''}
    </>
  )
}

export default App