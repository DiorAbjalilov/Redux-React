const initialState = [];

export default (state=initialState, action, payload)=> {
  switch (action.type) {
    case "Increment":
      return ([
        ...state,
        {
        name:action.payload
      }]);
    // case "Decrement":
    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //   };
    // case "Clear":
    //   return {
    //     ...state,
    //     counter: 0,
    //   };
    default:
      return state;
  }
}
