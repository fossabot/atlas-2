import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import LogRocket from "logrocket"

import rootReducer from "."

const initialState = {}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, LogRocket.reduxMiddleware()))

export default store
