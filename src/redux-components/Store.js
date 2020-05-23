import {createStore,applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import rootReducer from './CombineReducers';
import {CounterReducer} from './IncCounter/CounterReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(Logger,thunk));
export default store    