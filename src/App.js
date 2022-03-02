import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from './redux/action'
const App = () => {
  const count =useSelector(state=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={()=>dispatch(counterAction.increment)}>Increment</button>
      <button onClick={()=>dispatch(counterAction.clear)}>Clear</button>
      <button onClick={()=>dispatch(counterAction.decrement)}>Decrement</button>
    </>
  )
}

export default App