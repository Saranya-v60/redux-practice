import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incrementCounter} from './CounterAction';

export default function HooksIncCounter() {
    const numOfCount = useSelector(state => state.count)
    const dispactIncCounter = useDispatch()
    return (
        <div>
            <div>
            Count - {numOfCount}
            </div>
            <div>
                <button onClick= {() => dispactIncCounter(incrementCounter())}>Incremet counter</button>
            </div>

        </div>
    )
}

