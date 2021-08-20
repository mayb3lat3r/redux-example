import { createStore, combineReducers, applyMiddleware } from "redux" // т.к. redux-thunk является middleware, подключим applyMiddleware
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))