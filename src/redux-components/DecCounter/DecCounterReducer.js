const initialState = {
    decCount: 20
}
export const DecReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEC_COUNTER": return {
            ...state,
            decCount: state.decCount - 1
        }
        default: return state;
    }
}