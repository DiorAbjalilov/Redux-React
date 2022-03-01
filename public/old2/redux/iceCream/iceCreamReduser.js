import {DECREMENT, INCREMENT, CLEAR} from './counterTypes'

const initialState={
    counter:0
}
const counterReducer=(state = initialState, action) => {
    switch (action.type) {
        case DECREMENT: return{
            ...state,
            counter:state.counter-1
        }
        case INCREMENT: return{
            ...state,
            counter:state.counter+1
        }
        case CLEAR: return{
            ...state,
            counter:0
        }
        default:
            return state;
    }
};
export default counterReducer