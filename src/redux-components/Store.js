import {createStore,applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import rootReducer from './CombineReducers';
import {CounterReducer} from './IncCounter/CounterReducer';

const store = createStore(rootReducer,applyMiddleware(Logger));
export default store    