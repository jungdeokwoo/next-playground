import { createStore, combineReducers } from 'redux'
import counterReducer from 'redux/counterReducer'

// const rootReducer = combineReducers()

export const store = createStore(counterReducer)
