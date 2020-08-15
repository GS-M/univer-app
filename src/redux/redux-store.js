import { combineReducers, createStore } from "redux";
import universReducer from "./univers-reducer";



let reducers = combineReducers({
    universityPage: universReducer
});

let store = createStore(reducers);

export default store;