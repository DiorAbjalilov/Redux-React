import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';


const HookCakeContainer = () => {
    const numOfCake= useSelector((state) => state.cake.numOfCake);
    const dispatch= useDispatch()
    return (
    <div>
        <h2>Num of cake - {numOfCake}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HookCakeContainer