const initialCounter = {
    count : 1
}
export const CounterReducer = (state = initialCounter,action) =>{
  switch(action.type){
    case 'INC_COUNTER': return{
      ...state,
      count : state.count + 1
    }
    default: return state
  }
}