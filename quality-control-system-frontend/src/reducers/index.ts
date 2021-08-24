import { combineReducers } from "redux";
import root from './root'

let rootReducer = combineReducers({
    qcsApp: root
})

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

export default rootReducer