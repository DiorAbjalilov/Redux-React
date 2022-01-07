const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "qush":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
