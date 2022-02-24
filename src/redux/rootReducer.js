import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReduser'
import userReducer from './user/userReducer'
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

export default rootReducer