import { weatherReducer } from './weatherReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    weatherReducer,
})

export type RootState = ReturnType<typeof rootReducer>