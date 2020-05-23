import React from 'react'
import {combineReducers} from 'redux';
import {CounterReducer} from './IncCounter/CounterReducer';
import {DecReducer} from './DecCounter/DecCounterReducer';
import {UserReducer} from './User/UserReducer';


 const rootReducer = combineReducers({
    inc:CounterReducer,
    dec:DecReducer,
    usr:UserReducer
});

export default rootReducer;

