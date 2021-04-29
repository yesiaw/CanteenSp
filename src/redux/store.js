import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import BasketReducer from "../Components/Basket/ducks/reducers/reducers";


let redusers = combineReducers({
    basketPage: BasketReducer,

})

let store = createStore(redusers, applyMiddleware(thunkMiddleware) )


export default store;