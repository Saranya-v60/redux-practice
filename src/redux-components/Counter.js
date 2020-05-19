import CounterAction from './CounterAction';
import React from 'react'
import Store from './Store';

const Counter = () =>{
    return (
        <div>
            Count : {Store}
            <button>Increment Count </button>
        </div>
    )
}
