const initialCounter = {
    count : 1
}
export const CounterReducer = (state = initialCounter,action) =>{
  console.log(typeof(action.payload));
  switch(action.type){
    case 'INC_COUNTER': return{
      ...state,
      count : state.count + parseInt(action.payload)
    }
    default: return state
  }
}