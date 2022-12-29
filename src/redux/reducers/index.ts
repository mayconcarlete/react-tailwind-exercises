import {combineReducers} from "redux"
import {loginReducer} from "./login"

export const reducers = combineReducers({
  login: loginReducer
})

export type RootState = ReturnType<typeof reducers>;
