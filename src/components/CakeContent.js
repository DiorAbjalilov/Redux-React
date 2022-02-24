import React from 'react'
import { buyCake } from '../redux';
import {connect} from 'react-redux'

const CakeContent = (props) => {
  return (
    <div>
      <h1>Number CakeContent {props.numOfCake}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps=state=>{
    return {
      numOfCake: state.cake.numOfCake,
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContent)