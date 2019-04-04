import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from './middleware/logger'
import reducer from './modules'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));



export default store;