import { combineReducers } from "redux";
import root from './root'

const rootReducer = combineReducers({
    qcsApp: root
})

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

export default rootReducer