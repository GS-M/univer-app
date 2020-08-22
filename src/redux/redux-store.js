import { combineReducers, createStore, applyMiddleware } from "redux";
import universReducer from "./univers-reducer";
import thunkMiddleware from 'redux-thunk'



let reducers = combineReducers({
    universityPage: universReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;