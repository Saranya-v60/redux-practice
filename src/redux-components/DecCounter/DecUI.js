import React from 'react';
import {connect} from 'react-redux';
import {DecCounterAction} from './DecCounterAction';

const DecrementCounter = (props) => {
    return(
   <div>
       <div>
       Decrement Count : {props.count}
       </div>
       <div>
       <button onClick = {props.decCountValue}>Decrement</button>
       </div>
   </div>
    )
}
const mapStateToProps = (state) =>{
    return{
    count : state.dec.decCount
    }
}
const mapDispatchToProps = dispatch => {
    return {
        decCountValue: () => {dispatch(DecCounterAction())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DecrementCounter)