import {incrementCounter} from './CounterAction';
import React,{useState} from 'react';
import {connect} from 'react-redux';

const Counter = (props) =>{
    const [inputCount,setInputCount] = useState(1);
    return (
        <div>
            <div>
            Count : {props.count}
            </div>
            <div>
            <input type = "text" value = {inputCount} onChange = {(e) => setInputCount(e.target.value)} />
            <button onClick = {() => props.incCounter(inputCount)}>Increment Count </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        count : state.inc.count
    }
}
const mapDispatchToProps = dispatch => {
    return{
        incCounter : (inputCount) =>  dispatch(incrementCounter(inputCount))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)