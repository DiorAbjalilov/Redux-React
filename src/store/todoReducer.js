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
    case "ayir":
      return {
        ...state,
        count: state.count - 1,
      };
    case "uchir":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
