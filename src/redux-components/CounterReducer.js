const initialCounter={
    count = 1
}
const CounterReducer = (state = initialCounter,action) =>{
  switch(action.type){
    case 'INC_COUNTER': return{
      count = state.count + 1
    }
    default: return state.count
  }
}
export default CounterReducer