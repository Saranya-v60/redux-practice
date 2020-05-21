import {incrementCounter} from './CounterAction';
import React from 'react';
import {connect} from 'react-redux';

const Counter = (props) =>{
    return (
        <div>
            Count : {props.count}
            <button onClick = {props.incCounter}>Increment Count </button>
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
        incCounter : () =>  dispatch(incrementCounter())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)