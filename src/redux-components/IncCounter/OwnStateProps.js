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
        </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    const countValue = ownProps.hasOwnProps ? 20 : state.inc.count
    return{
        count : countValue
    }
}
export default connect(mapStateToProps)(Counter)