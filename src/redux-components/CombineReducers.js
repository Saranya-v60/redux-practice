import React from 'react'
import {combineReducers} from 'redux';
import {CounterReducer} from './IncCounter/CounterReducer';
import {DecReducer} from './DecCounter/DecCounterReducer';


 const rootReducer = combineReducers({
    inc:CounterReducer,
    dec:DecReducer
});

export default rootReducer;

