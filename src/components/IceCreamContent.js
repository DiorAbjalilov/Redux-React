import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContent = (props) => {
  return (
    <div>
      <h1>Number IceCreamContent {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContent);
