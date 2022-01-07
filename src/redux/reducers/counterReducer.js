import { counter } from "../type";
const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case counter.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case counter.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case counter.DELETE:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
