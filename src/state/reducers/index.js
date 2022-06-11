import { combineReducers } from "redux";
import amountReducer from './amountReducer'

// can export multiple reducers as object using combine reducers 
const reducers = combineReducers({
    amount:amountReducer
})

export default reducers