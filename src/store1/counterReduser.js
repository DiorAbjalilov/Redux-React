const initialState = {
  name: "",
};
export default (state = initialState, action, payload) => {
  switch (action.type) {
    case "Enter":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
