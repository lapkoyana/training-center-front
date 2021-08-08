import { combineReducers, createStore } from "redux";
import lectionReducer from "./lesson-reducer";

let reducers = combineReducers({
    lessonPage: lectionReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;