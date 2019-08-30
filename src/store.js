import reducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const composeEnhancers = composeWithDevTools({})

let middleWare = applyMiddleware(thunk)
const store = createStore(reducer, composeEnhancers(middleWare));

export default store;