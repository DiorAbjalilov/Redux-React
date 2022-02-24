import React from 'react'
import { connect } from 'react-redux'
function ItemContent(props) {
  return (
    <div>Item - {props.item}</div>
  )
}

const mapStateToProps=(state, ownProps)=>{
  const itemState=ownProps.cake?
  state.cake.numOfCake:
  state.iceCream.numOfIceCream

  return {
    item:itemState
  }
}


export default connect(mapStateToProps)(ItemContent)