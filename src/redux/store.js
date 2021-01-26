import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'

// export const history = createMemoryHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))